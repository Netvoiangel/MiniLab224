const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Базовый URL для TMDb API
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Эндпоинт 1: Получение списка популярных фильмов
app.get('/movies/popular', async (req, res) => {
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
                page: 1,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка получения популярных фильмов' });
    }
});

// Эндпоинт 2: Поиск фильма по названию
app.get('/movies/search', async (req, res) => {
    const { query } = req.query; // Передаем параметр query
    if (!query) {
        return res.status(400).json({ error: 'Укажите параметр query' });
    }
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
            params: {
                api_key: TMDB_API_KEY,
                query,
                language: 'en-US',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка поиска фильма' });
    }
});

// Эндпоинт 3: Получение информации о фильме по ID
app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка получения информации о фильме' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
