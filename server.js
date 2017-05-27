var express = require('express');

//On crée notre app :
var app = express();
const PORT = process.env.PORT || 3000;

//Permet de rediriger le HTTPS vers HTTP :
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http')
  {
    next();
  }
  else
  {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Serveur is running on port " + PORT + " !");
});
