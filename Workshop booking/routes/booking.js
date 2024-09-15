var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Bookings = require('../models/booking');


//Get the booking page
router.get('/', function(req, res) {
    const locals ={
      title: "Booking page"
    }
    res.render('booking',{locals})
});
  

//Create a new booking and post the results to the database
router.post("/", function(req,res){
    let newbooking = new Bookings({
      FName: req.body.fname,
      LName: req.body.lname,
      Email: req.body.email,
      Phoneno: req.body.phoneno,
      Date: req.body.bookingDate,
      Time:req.body.times,
      CardFName:req.body.name_card,
      CardNo:req.body.cardno,
      ExpMonthYear:req.body.ExpMonthYear,
      CVV:req.body.cvv
    });
    newbooking.save();
    res.redirect('/');
    
    
});

//Get the booked page which displays every booking

router.get("/booked",(req,res,err) =>{
  const locals = {
    title: "Booked"//passes the Title to the page which will render it as a title
  };
    Bookings.find()
      .then((bookingfound) =>{
        res.render('booked',{'bookedlist' : bookingfound,locals});
    });
});


//Update page for a booking with a particular id
router.get('/updatebooking/:id', (req, res, next) => {
  const locals = {
    title: "Update Booking"
  };

  Bookings.findById(req.params.id)
    .then((booking) => {
      if (booking) {
        res.render('updatebooking', { updatebooking: booking , locals});
        
      } else {
        res.end("Sorry, no booking with this ID");
      }
    })
    .catch((err) => next(err));
});




//Update the bookig with id
router.post('/update_complete/:id', async (req, res, next) => {
  //create a constant update document that takes in an id
  const updateDocument = async (id) => {
    try {

      await Bookings.findByIdAndUpdate(req.params.id, req.body);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the updateDocument function
  await updateDocument(req.params.id);

  // redirect to the booked web page
  res.redirect(301,'http://localhost:3000/booking/booked');
});


//Delete the booking with id
router.get('/deletebooking/:id', async (req, res, next) => {

  const deletebooking = async (id) => {
    try {
      await Bookings.findByIdAndDelete(req.params.id, req.body);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the deletebooking function
  await deletebooking(req.params.id);

  // redirect to the booked web page
  res.redirect(301,'http://localhost:3000/booking/booked');
});



//get find booking site, with the title find a booking

router.get('/findbooking', function(req, res) {
  const locals ={
    title: "Find a booking"
  }
  res.render('findbooking',{locals})
});


//find and display all the bookings with the same email address and passes the title too.

router.post('/findbooking', (req, res, next) => {
  const locals = {
    title: "Found Bookings"
  };
  Bookings.find({FName: req.body.FName,LName : req.body.LName,Email: req.body.Email,Date: req.body.Date})
    .then((booking) => {
      if (booking.length > 0) {
        res.render('foundbookings', { bookedlist: booking , locals});
        console.log(booking);
        
      } else {
        res.end("Sorry, no booking with this Email");
      }
    })
    .catch((err) => next(err));
});


module.exports = router;