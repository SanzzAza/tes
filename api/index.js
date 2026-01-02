const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Base URLs
const API_BASE_1 = 'https://dramabox.sansekai.my.id/api/dramabox';
const API_BASE_2 = 'https://dramabox-api-rho.vercel.app/api';

// ========================================
// PROXY ENDPOINTS
// ========================================

// 1. VIP Drama
app.get('/vip', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_1}/vip`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2. Dubbed Drama
app.get('/dubbed', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_2}/dubbed`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. Random Drama
app.get('/random', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_1}/randomdrama`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. For You
app.get('/foryou', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_1}/foryou`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5. Latest Drama
app.get('/latest', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_1}/latest`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 6. Trending Drama
app.get('/trending', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_1}/trending`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 7. Popular Search
app.get('/popularsearch', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_1}/populersearch`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 8. Search Drama
app.get('/search', async (req, res) => {
    try {
        const query = req.query.query || req.query.q;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter required' });
        }
        const response = await axios.get(`${API_BASE_1}/search?query=${encodeURIComponent(query)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 9. Drama Detail
app.get('/detail', async (req, res) => {
    try {
        const bookId = req.query.bookId;
        if (!bookId) {
            return res.status(400).json({ error: 'bookId parameter required' });
        }
        const response = await axios.get(`${API_BASE_1}/detail?bookId=${bookId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 10. All Episodes
app.get('/episodes', async (req, res) => {
    try {
        const bookId = req.query.bookId;
        if (!bookId) {
            return res.status(400).json({ error: 'bookId parameter required' });
        }
        const response = await axios.get(`${API_BASE_1}/allepisode?bookId=${bookId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ========================================
// EXPORT APP UNTUK VERCEL
// ========================================
// JANGAN PAKAI app.listen() DI VERCEL!
module.exports = app;
