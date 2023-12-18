const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

const allProducts = require('/Users/macbookDanya/Desktop/web/lab8_web_react/frontend/src/Components/Assets/all_product.js');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/products', (req, res) => {
    res.json(allProducts);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
