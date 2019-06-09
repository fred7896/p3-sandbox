const express = require("express");
const app = express();
const connection = require("./conf");
const cors = require("cors");

app.use(cors());
const bodyParser = require("body-parser");
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// j'implémente la partie API
app.get("/", (req, res) => {
  let msg = "Welcome on Dyna Wing Sail Backend";
  res.status(200).send(msg);
});

// 1- GET - Récupération de l'ensemble des données de la table waterponds
app.get("/api/water-ponds", (req, res) => {
  connection.query("SELECT * from water_pond", (err, rows) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des donnees");
    } else {
      res.json(rows);
    }
  });
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5050, function() {
  console.log("Listening on port " + server.address().port);
});
