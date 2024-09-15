// products.js
const fs = require("fs").promises;
const path = require("path");
const { urlToHttpOptions } = require("url");

const productsFile = path.join(__dirname, "data/products.json");

/**
 * List all products
 * @returns {Promise<Array>}
 */
async function list() {
  // const data = await fs.readFile(productsFile)
  // return JSON.parse(data)
  const { offset = 0, limit = 25 } = options;
  const data = await fs.readFile(productsFile);
  return JSON.parse(data)
//filter
  .filter(product => {
    
  })
  .slice(offset, offset+limit)
}
  
  //return JSON.parse(data).slice(offset, offset + limit);
//}

async function get(id) {
  const products = JSON.parse(await fs.readFile(productsFile));
  // Loop through the products and return the product with the matching id
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }

  // If no product is found, return null
  return null;
}


module.exports = {
  list,
  get,
};
