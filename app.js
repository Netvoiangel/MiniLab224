const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;  
const OMDB_BASE_URL = 'http://www.omdbapi.com/';
const axiosInstance = axios.create({
    baseURL: OMDB_BASE_URL,
    timeout: 5000, 
});

app.get('/movies/popular', async (req, res) => {
    try {
        const response = await axiosInstance.get('', {
            params: {
                apikey: OMDB_API_KEY,
                s: 'Avengers',  
                page: 1,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Ошибка запроса:', error.message);
        if (error.response) {
            console.error('Статус:', error.response.status);
            console.error('Данные ошибки:', error.response.data);
        } else if (error.request) {
            console.error('Запрос был сделан, но ответа нет:', error.request);
        } else {
            console.error('Неизвестная ошибка:', error.message);
        }
        res.status(500).json({ error: 'Ошибка получения популярных фильмов' });
    }
});

app.get('/movies/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Укажите параметр query' });
    }
    try {
        const response = await axiosInstance.get('', {
            params: {
                apikey: OMDB_API_KEY,
                s: query, 
                page: 1,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка поиска фильма' });
    }
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axiosInstance.get('', {
            params: {
                apikey: OMDB_API_KEY,
                i: id,  
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка получения информации о фильме' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
