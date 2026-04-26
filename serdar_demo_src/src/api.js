import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
    baseURL: `/api`,
});

const mock = new MockAdapter(api, { delayResponse: 500 });

// Mock data generator for Forecasts
const generateForecasts = () => {
    const data = [];
    const items = ['1001-KAPAK', '2005-GÖVDE', '3044-CONTA', '5002-VİDA', '7091-MOTOR', '8022-BOYA', '4055-KULP', '6011-MENTEŞE'];
    const nextYear = 2027;
    const dates = [];
    for (let m = 1; m <= 12; m++) {
        dates.push(`${nextYear}-${String(m).padStart(2, '0')}-01`);
    }
    
    items.forEach(item => {
        dates.forEach(date => {
            const baseAmount = Math.floor(Math.random() * 5000) + 1000;
            const month = parseInt(date.slice(5, 7));
            const seasonalMultiplier = 1 + Math.sin((month / 12) * Math.PI * 2) * 0.2;
            const amount = Math.floor(baseAmount * seasonalMultiplier);
            
            data.push({
                item_id: item,
                date: date,
                amount: amount,
                yhat_lower: amount * 0.88,
                yhat_upper: amount * 1.12,
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
    const pastForecasts = [];

    for (let year = 2020; year <= 2025; year++) {
        for(let m = 1; m <= 12; m++) {
            const baseSales = Math.floor(Math.random() * 4000) + 1500;
            const seasonalMultiplier = 1 + Math.sin((m / 12) * Math.PI * 2) * 0.25;
            const growthMultiplier = 1 + (year - 2016) * 0.05;
            const actualSales = Math.floor(baseSales * seasonalMultiplier * growthMultiplier);
            
            history.push({ year, month: m, total_sales: actualSales });
            
            const error = (Math.random() - 0.5) * 0.40;
            const bias = (Math.random() - 0.5) * 500;
            const pForecast = Math.floor(actualSales * (1 + error) + bias);
            
            pastForecasts.push({
                date: `${year}-${String(m).padStart(2, '0')}-01`,
                yhat: pForecast,
                yhat_lower: Math.max(0, Math.floor(pForecast * 0.82)),
                yhat_upper: Math.floor(pForecast * 1.18)
            });
        }
    }

    const itemForecasts = forecastData.filter(f => f.item_id === itemId).map(f => ({
        date: f.date,
        yhat: f.amount,
        yhat_lower: f.yhat_lower,
        yhat_upper: f.yhat_upper
    }));

    return [200, { 
        sales_history: history, 
        past_forecasts: pastForecasts,
        forecast: itemForecasts 
    }];
});

// Mock Data for Safety Stock
const generateSafetyStocks = () => {
    const data = [];
    const items = ['1001-KAPAK', '2005-GÖVDE', '3044-CONTA', '5002-VİDA', '7091-MOTOR', '8022-BOYA', '4055-KULP', '6011-MENTEŞE'];
    const startYear = 2027;
    const startMonth = 1;

    items.forEach(item => {
        for (let i = 0; i < 12; i++) {
            const m = (startMonth + i - 1) % 12 + 1;
            const y = startYear + Math.floor((startMonth + i - 1) / 12);
            const dateStr = `${y}-${String(m).padStart(2, '0')}-01`;
            
            const formulaVal = Math.floor(Math.random() * 2000) + 500;
            const aiVal = Math.floor(Math.random() * 2000) + 500;
            
            data.push({
                item_id: item,
                date: dateStr,
                item_type: 'Hammadde',
                item_quantity_type: 'Adet',
                current_stock: Math.floor(Math.random() * 3000) + 100,
                ai_amount: aiVal,
                formula_result: formulaVal,
                manual_amount: null,
                preference: null,
                is_approved: false
            });
        }
    });
    return data;
};

let safetyStockData = generateSafetyStocks();

mock.onGet("/safety-stock").reply(200, safetyStockData);
mock.onGet("/safety-stock/temporary").reply(200, safetyStockData);
mock.onPost("/safety-stock/calculate").reply(200, { success: true });
mock.onPost("/safety-stock/approve").reply(200, { success: true });

// Mock for Consumption Data
mock.onGet(/\/consumption\/.+/).reply((config) => {
    const itemId = config.url.split('/').pop();
    const data = [];
    
    // 2026 (Historical) + 2027 (Future)
    // Historical 2026
    for (let m = 1; m <= 12; m++) {
        const dateStr = `2026-${String(m).padStart(2, '0')}-01`;
        data.push({
            item_id: itemId,
            date: dateStr,
            consumption: Math.floor(Math.random() * 1000) + 200,
            historical_ss: Math.floor(Math.random() * 500) + 300,
            future_ai: null
        });
    }
    
    // Future 2027 (Green)
    for (let m = 1; m <= 12; m++) {
        const dateStr = `2027-${String(m).padStart(2, '0')}-01`;
        data.push({
            item_id: itemId,
            date: dateStr,
            consumption: null,
            historical_ss: null,
            future_ai: Math.floor(Math.random() * 600) + 400
        });
    }
    
    return [200, data];
});

export default api;
