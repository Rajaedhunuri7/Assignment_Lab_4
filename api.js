const fs = require("fs").promises;
const Products = require("./product");
const path = require("path")
/**
 * Handle the root route
 * @param {object} req
 * @param {object} res
 */
function handleRoot(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
}
async function getProducts(req, res, next) {
    // Add CORS headers
    //res.setHeader("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    //try {
        //const product = await Products.getProduct(id);
        if (!product) {
            return next(); // Handle not found case
        }
        res.json(product);
    } //catch (err) {
        //res.status(500).json({ error: err.message });
    }
}

/**
 * List all products
 * @param {object} req
 * @param {object} res
 */
async function listProducts(req, res) {
    //res.setHeader("Access-Control-Allow-Origin", "*");
    const { offset = 0, limit = 25 } = req.query;

   //try {
        //const products = await Products.list({
    res.json(await Products.list({
            offset: Number(offset),
            limit: Number(limit),
        });

        //res.json(products);
    //} catch (err) {
        //res.status(500).json({ error: err.message });
    }
}


async  function createProduct (req, res){
    console.log('request body:', req.body)
    res.json(req.body)
}
module.exports = {
    handleRoot,
    listProducts,
    getProducts,
    createProducts
};
