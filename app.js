const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        language: 'Node.js',
        framework: 'Express.js',
        message: 'Hello World!'
    });
});

module.exports = app;