Product Order Service

This repository contains two different microservices.
-----------------------------------------------------

- Product Service
- Order Service

services contain different endpoints
------------------------------------

- GET /version
- GET /health
- GET /products
- GET /productdetails/:product_name
- GET /orders/:product_name

Product Service is using ENV variable
-------------------------------------

- ORDER_API_URL = 'http://localhost:5000' (Order Service Base URL)
