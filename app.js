const express = require("express");
const api = require("./api");
const cors = require("cors");

// Set the port
const port = process.env.PORT || 3000;

// Boot the app
const app = express();

// Register the public directory
app.use(express.static(__dirname + "/public"));
app.get("/products/:id", api.getProducts);

// Enable CORS
app.use(cors());

// Register the routes
app.get("/products", api.listProducts);
app.get("/", api.handleRoot);

// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
