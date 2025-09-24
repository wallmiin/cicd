const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware đọc JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Import routes
const productRoutes = require("./routes/products");

// Routes
// app.get("/", (req, res) => {
//   res.send("Hello CI/CD with Docker & GitHub Actions!");
// });

app.use("/products", productRoutes);

// Server listen
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${port}/`);
});
