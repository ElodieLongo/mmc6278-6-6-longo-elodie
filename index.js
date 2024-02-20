const app = require("./app");
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.listen(PORT, function () {
  console.log("\n");
  console.log(
    "\x1b[35m%s\x1b[0m",
    "Server listening on http://localhost:" + PORT
  );
});
