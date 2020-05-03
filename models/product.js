const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const carSchema = new Schema({
    vehicleNumber: { type: Number, required: true,unique:true },
    model: { type: String, required: true },
    rentPerDay: { type: Number, required: true },
    isRented: { type: Number, required:true},
    seatcap:{type:Number,required:true},
    

})

const Car = mongoose.model('Car', carSchema);
module.exports = Car;