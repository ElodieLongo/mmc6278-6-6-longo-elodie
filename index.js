const app = require("./app");
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', {title: 'HOME'})
})

app.get('/cart', (req, res) => {
  res.render('cart', {title: 'CART'})
})

app.get('/product', (req, res) => {
  res.render('product', {title: 'PRODUCT'})
})

app.listen(PORT, function () {
  console.log("\n");
  console.log(
    "\x1b[35m%s\x1b[0m",
    "Server listening on http://localhost:" + PORT
  );
});
