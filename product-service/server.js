var express = require('express');
var axios = require('axios');
var app = express();
const port = 3000;

app.listen(port, () => console.log(`Application Running!`))
const orderApiUrl = process.env.ORDER_API_URL;

app.get('/products', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var products = ["Laptop", "Headphones", "Mobile", "Watch", "Tablet"]
    console.log(products);
    res.end(JSON.stringify(products));
 })

app.get('/productdetails/:product_name', function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    console.log('OrderBaseURL', orderApiUrl);
    axios.get(orderApiUrl + '/orders/' + req.params.product_name)
    .then(response => {
        // Handle the API response
        console.log('API Response:', response.data);
        res.end(JSON.stringify(response.data));
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
    });
})

app.get('/health', function(req, res){
    const healthCheckRes = {
        uptime: process.uptime(),
        message: 'Healthy',
        timestamp: Date.now()
    };
    try {
        res.send(healthCheckRes);
    } catch (error) {
        healthCheckRes.message = error;
        res.status(503).send();
    }
})

app.get('/version', function(req, res){
    const versionResponse = {
        uptime: process.uptime(),
        message: 'Version: v2.0.0',
        timestamp: Date.now()
    };
    try {
        res.send(versionResponse);
    } catch (error) {
        versionResponse.message = error;
        res.status(503).send();
    }
})