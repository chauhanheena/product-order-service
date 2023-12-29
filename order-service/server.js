var express = require('express');
var app = express();
const port = 3000;

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

function getOrderDetail(product_name) {
    var order = {};

    switch (product_name) {
        case 'Laptop':
            console.log('You chose Laptop');
            order = {
                "product": "Laptop",
                "order_quantity": "1"
            }
            break;
        case 'Headphones':
            console.log('You chose Headphones');
            order = {
                "product": "Headphones",
                "order_quantity": "1"
            }
            break;
        case 'Mobile':
            console.log('You chose Mobile');
            order = {
                "product": "Mobile",
                "order_quantity": "1"
            }
            break;
        case 'Watch':
            console.log('You chose Watch');
            order = {
                "product": "Watch",
                "order_quantity": "1"
            }
            break;
        case 'Tablet':
            console.log('You chose Tablet');
            order = {
                "product": "Tablet",
                "order_quantity": "1"
            }
            break;
        default:
            console.log('Invalid option');
    }

    return order;
}

app.get('/orders/:product_name', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const orderDetail = getOrderDetail(req.params.product_name);
    console.log(orderDetail);
    res.end(JSON.stringify(orderDetail));
 })
