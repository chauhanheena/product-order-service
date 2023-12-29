var express = require('express');
var app = express();
const port = 3000;

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

app.get('/products', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var products = ["Laptop", "Headphones", "Mobile", "Watch", "Tablet"]
    console.log(products);
    res.end(JSON.stringify(products));
 })