const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')

// Create Express Server
const app = express();
app.use(cors())

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = process.env.API_SERVICE_URL;

// Logging
app.use(morgan('dev'));

// Authorization
app.use('', (req, res, next) => {
    
        next();
    
 });

// Proxy endpoints
app.use('', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
 }));
console.log(process.env.API_SERVICE_URL);
 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });