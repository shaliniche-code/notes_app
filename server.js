const express = require("express");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const notes = JSON.parse(
  fs.readFileSync("./data/notes.json")
);

app.get("/", (req, res) => {
  res.render("index", { notes });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
