const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const { Signup, Login } = require('./controllers/auth.controller');





app.post("/signup", Signup);

app.post("/login", Login);

module.exports = app; 