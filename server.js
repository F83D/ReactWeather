var express = require('express');

//On crée notre app :
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Serveur is running on port 3000 !");
});
