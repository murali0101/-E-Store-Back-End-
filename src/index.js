const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const { SignUp,SignIn } = require('./controllers/auth.controller');





app.post("/signup", SignUp);

app.post("/signin", SignIn);

module.exports = app; 