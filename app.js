const express = require("express");
const api = require("./api");
const cors = require("cors");
const middleware = require('./middleware')
const bodyParser = require('body-parser')

// Set the port
const port = process.env.PORT || 3000;

// Boot the app
const app = express();

// Register the public directory
app.use(express.static(__dirname + "/public"));
app.use(middleware.cors)
app.use(bodyParser)

//register the routes
app.get("/products/:id", api.getProducts);
app.get("/products", api.listProducts);
app.post('/products', api.createProducts);
app.get('/', api.handleRoot);
app.use(middleware.handleError)
app.use(middleware.notFound)

// Enable CORS
app.use(cors());



// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
