import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
    baseURL: `/api`,
});

const mock = new MockAdapter(api, { delayResponse: 500 });

// Mock data generator for Forecasts
const generateForecasts = () => {
    const data = [];
    const items = ['1001-KAPAK', '2005-GÖVDE', '3044-CONTA', '5002-VİDA'];
    const dates = ['2026-05-01', '2026-06-01', '2026-07-01', '2026-08-01', '2026-09-01'];
    
    items.forEach(item => {
        dates.forEach(date => {
            const amount = Math.floor(Math.random() * 5000) + 1000;
            data.push({
                item_id: item,
                date: date,
                amount: amount,
                yhat_lower: amount * 0.85,
                yhat_upper: amount * 1.15,
                is_approved: false
            });
        });
    });
    return data;
};

let forecastData = generateForecasts();

mock.onGet("/forecast/temporary").reply(200, forecastData);
mock.onPost("/forecast/calculate").reply(200, { success: true });
mock.onPost("/forecast/approve").reply(() => {
    forecastData = forecastData.map(f => ({ ...f, is_approved: true }));
    return [200, { success: true }];
});
mock.onPost("/forecast/approve-row").reply((config) => {
    const { item_id, date } = JSON.parse(config.data);
    forecastData = forecastData.map(f => (f.item_id === item_id && f.date === date) ? { ...f, is_approved: true } : f);
    return [200, { success: true }];
});
mock.onPut("/forecast/update").reply((config) => {
    const { item_id, date, amount } = JSON.parse(config.data);
    forecastData = forecastData.map(f => (f.item_id === item_id && f.date === date) ? { ...f, amount: amount } : f);
    return [200, { success: true }];
});
mock.onGet(/\/forecast\/detail\/.+/).reply((config) => {
    const itemId = config.url.split('/').pop();
    const history = [];
    // Generate 3 years of fake history
    [2023, 2024, 2025].forEach(year => {
        for(let i = 1; i <= 12; i++) {
            history.push({ year: year, month: i, total_sales: Math.floor(Math.random() * 6000) + 800 });
        }
    });

    // Get forecasts for this item
    const itemForecasts = forecastData.filter(f => f.item_id === itemId).map(f => ({
        date: f.date,
        yhat: f.amount,
        yhat_lower: f.yhat_lower,
        yhat_upper: f.yhat_upper
    }));

    return [200, { sales_history: history, forecast: itemForecasts }];
});

// Mock Data for Safety Stock
const generateSafetyStocks = () => {
    const data = [];
    const items = ['1001-KAPAK', '2005-GÖVDE', '3044-CONTA', '5002-VİDA', '7091-MOTOR'];
    const currentMonth = '2026-05-01';
    items.forEach(item => {
        const formulaVal = Math.floor(Math.random() * 2000) + 500;
        const aiVal = Math.floor(Math.random() * 2000) + 500;
        data.push({
            item_id: item,
            date: currentMonth,
            safety_stock: aiVal,
            item_quantity_type: 'Adet',
            current_stock: Math.floor(Math.random() * 3000) + 100,
            ai_amount: aiVal,
            formula_amount: formulaVal,
            prophet_suggestion: aiVal,
            kings_suggestion: formulaVal,
            difference: Math.floor(Math.random() * 500) - 250,
            risk_category: ['Düşük', 'Orta', 'Yüksek'][Math.floor(Math.random() * 3)]
        });
    });
    return data;
};

let safetyStockData = generateSafetyStocks();

mock.onGet("/safety-stock").reply(200, safetyStockData);
mock.onGet("/safety-stock/temporary").reply(200, safetyStockData);
mock.onPost("/safety-stock/calculate").reply(200, { success: true });
mock.onPost("/safety-stock/approve").reply(200, { success: true });

export default api;
