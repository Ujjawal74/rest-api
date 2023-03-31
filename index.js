require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));

const productRoutes = require("./routes/product_routes");
const connectDB = require("./db/connect");
const Product = require("./models/product");

connectDB();

// homepage
app.get("/", (req, res) => {
  // res.send("This is our home page!");
  return res.render("index");
});

app.post("/", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((t) => {
      console.log("done", t);
      res.json({ status: "added" });
    })
    .catch((e) => {
      console.log("error is here", e);
    });
});

// middeware to set routes for products
app.use("/api/products", productRoutes);

app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error on running server");
  }
  console.log(`Server is listening at port ${PORT}`);
});
