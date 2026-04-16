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
    // Next year (2027)
    const nextYear = 2027;
    const dates = [];
    for (let m = 1; m <= 12; m++) {
        dates.push(`${nextYear}-${String(m).padStart(2, '0')}-01`);
    }
    
    items.forEach(item => {
        dates.forEach(date => {
            const baseAmount = Math.floor(Math.random() * 5000) + 1000;
            // Add some seasonality
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

    // Generate 10 years of history (2016-2025)
    for (let year = 2016; year <= 2025; year++) {
        for(let m = 1; m <= 12; m++) {
            const baseSales = Math.floor(Math.random() * 4000) + 1500;
            const seasonalMultiplier = 1 + Math.sin((m / 12) * Math.PI * 2) * 0.25;
            const growthMultiplier = 1 + (year - 2016) * 0.05; // 5% yearly growth
            const actualSales = Math.floor(baseSales * seasonalMultiplier * growthMultiplier);
            
            history.push({ year, month: m, total_sales: actualSales });
            
            // Generate a "Past Forecast" that is clearly distinguishable from actual sales
            const error = (Math.random() - 0.5) * 0.40; // High variance +/- 20%
            const bias = (Math.random() - 0.5) * 500; // Add some bias/lag
            const pForecast = Math.floor(actualSales * (1 + error) + bias);
            
            pastForecasts.push({
                date: `${year}-${String(m).padStart(2, '0')}-01`,
                yhat: pForecast,
                yhat_lower: Math.max(0, Math.floor(pForecast * 0.82)), // ~95% CI
                yhat_upper: Math.floor(pForecast * 1.18) // ~95% CI
            });
        }
    }

    // Get current/future forecasts for this item
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
    // Next 12 months
    const startYear = 2026;
    const startMonth = 5;

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
                safety_stock: aiVal,
                item_quantity_type: 'Adet',
                current_stock: Math.floor(Math.random() * 3000) + 100,
                ai_amount: aiVal,
                formula_amount: formulaVal,
                ai_suggestion: aiVal,
                kings_suggestion: formulaVal,
                difference: Math.floor(Math.random() * 500) - 250,
                risk_category: ['Düşük', 'Orta', 'Yüksek'][Math.floor(Math.random() * 3)]
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

export default api;
