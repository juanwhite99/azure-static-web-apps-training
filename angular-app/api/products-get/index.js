const data = require('../shared/product-data');

module.exports = async function (context, req) {
  // const name = (req.query.name || (req.body && req.body.name));
  try {
    const products = data.getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
