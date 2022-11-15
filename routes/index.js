
var express = require('express');
var router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Efranor",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "David",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Short Message Board", messages: messages, format: distanceInWords });
  
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
