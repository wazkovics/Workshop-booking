const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create a new booking schema
var BookingsSchema = new Schema({
    FName:{ type: String, required: true},
    LName:{ type: String, required: true},
    Email:{ type: String, required: true},
    Phoneno: { type: String,required: true},
    Date:{type : Date, required: true},
    Time:{type : String,required:true},
    CardFName:{type: String, required:true},
    CardNo:{type:Number,required:true},
    ExpMonthYear:{type:Date,required:true},
    CVV:{type:Number,required:true}
},  {
    timestamps:  true
});


//creates a model using the schema
const Bookings = mongoose.model("Booking",BookingsSchema);

//exports the model
module.exports = Bookings;