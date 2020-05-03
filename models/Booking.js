const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const bookingschmea = new Schema({
    vehicleNumber: { type: Number, required: true,unique:true },
    name: { type: String, required: true },
    DateBooked: { type: Date, required: true },
    DateReturned:{type:Date,required:true},
    phone:{type:String,required:true},
    
})

const CarBook = mongoose.model('CarBook', bookingschmea);
module.exports = CarBook;