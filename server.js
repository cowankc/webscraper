const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const exphbs = require("express-handlebars");
const apiRoutes = require("./routes/APIroutes");
const htmlRoutes = require("./routes/HTMLroutes");
const app = express();

app.use(express.static("public"));
app.use("/public", express.static('./public/'));
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.listen(PORT, function () {
  console.log(`Listening on http://localhost:${PORT}`);
});