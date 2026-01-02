const express = require('express');
const cors = require('cors');
const axios = require('axios');
const serverless = require('serverless-http'); // <--- Import ini

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const API_BASE_1 = 'https://dramabox.sansekai.my.id/api/dramabox';
const API_BASE_2 = 'https://dramabox-api-rho.vercel.app/api';

// ========================================
// ROUTES
// ========================================

// 1. VIP
app.get('/vip', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_1}/vip`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 2. Dubbed
app.get('/dubbed', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_2}/dubbed`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 3. Random
app.get('/random', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_1}/randomdrama`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 4. For You
app.get('/foryou', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_1}/foryou`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 5. Latest
app.get('/latest', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_1}/latest`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 6. Trending
app.get('/trending', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_1}/trending`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 7. Popular Search
app.get('/popularsearch', async (req, res) => {
    try {
        const { data } = await axios.get(`${API_BASE_1}/populersearch`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 8. Search
app.get('/search', async (req, res) => {
    try {
        const query = req.query.query || req.query.q;
        if (!query) return res.status(400).json({ error: 'Query required' });
        const { data } = await axios.get(`${API_BASE_1}/search?query=${encodeURIComponent(query)}`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 9. Detail
app.get('/detail', async (req, res) => {
    try {
        const bookId = req.query.bookId;
        if (!bookId) return res.status(400).json({ error: 'bookId required' });
        const { data } = await axios.get(`${API_BASE_1}/detail?bookId=${bookId}`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// 10. Episodes
app.get('/episodes', async (req, res) => {
    try {
        const bookId = req.query.bookId;
        if (!bookId) return res.status(400).json({ error: 'bookId required' });
        const { data } = await axios.get(`${API_BASE_1}/allepisode?bookId=${bookId}`);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// ========================================
// EXPORT UNTUK VERCEL
// ========================================
module.exports = serverless(app);
