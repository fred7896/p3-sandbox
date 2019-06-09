const express = require("express");
const app = express();

// j'implémente la partie API
app.get("/", (req, res) => {
  let msg = "Welcome on Dyna Wing Sail Backend";
  res.status(200).send(msg);
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5050, function() {
  console.log("Listening on port " + server.address().port);
});
