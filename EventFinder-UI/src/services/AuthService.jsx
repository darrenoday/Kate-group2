// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Change this if your backend is hosted elsewhere

const register = (username, password, verifyPassword) => {
    return axios.post(`${API_URL}/register`, {
        username,
        password,
        verifyPassword
    });
};

const login = (username, password) => {
    return axios.post(`${API_URL}/login`, {
        username,
        password
    });
};

export default {
    register,
    login
};
