var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const locals ={
    title: "Home Page",
    description: "Simple booking website create using NodeJS,Express and MongoDB"
  }
  res.render('index',{locals});
});


//GET the about page with the title about
router.get('/about', function(req, res) {
  const locals ={
    title: "About"
  }
  res.render('about',{locals})
});


//Get the help page which redirects to a google docs document
router.get('/help', function(req, res) {
  res.redirect("https://docs.google.com/document/d/1herhDh5JDTkRNTWk9HwXcwk2MWtKAMOopyyh8ztJvnQ/edit?usp=sharing")
});





module.exports = router;
