const mongoose = require('mongoose');
const URL = "mongodb+srv://ferencszabo:MasterOrange13@workshopbooking.a6xeyhq.mongodb.net/Bookings"
//tries to connect to the database and logs the error in the console if it cant
const connecttodb = async () => {
    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(URL);
        console.log(`Databse Connected: ${conn.connection.host}`);
        console.log("Connected to Mongo DB");
    } catch(error){
        console.log(error);
    }
}
module.exports = connecttodb;