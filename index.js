const express = require('express');
const app = express();
const morgan = require('morgan');

// routes
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1/users', userRouter);

module.exports = app;