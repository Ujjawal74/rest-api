const getAllProducts = (req, res) => {
  return res.status(200).json({ totalProducts: 2000 });
};

const productDetails = (req, res) => {
    return res.status(200).json({ productDetails: "ok!" });
  };
  

module.exports = {getAllProducts, productDetails};
