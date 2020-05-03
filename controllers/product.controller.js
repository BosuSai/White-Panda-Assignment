const Product = require('../models/product');
const Booking=require('../models/Booking');
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');

};

exports.product_create = function (req, res ) {
    let product = new Product(
        {
            vehicleNumber: req.body.vehicleNumber,
            model: req.body.model,
            rentPerDay: req.body.rentPerDay,
            isRented: req.body.isRented, 
            seatcap:req.body.seatcap,  
        }
    );

    product.save(function (err) {
        res.send('Car added successfully to database')
    })
};

exports.car_book = function (req, res) {
    let book=new Booking(
        {
            vehicleNumber:req.body.vehicleNumber,
            name: req.body.name,
            DateBooked: req.body.DateBooked,
            DateReturned:req.body.DateReturned,
            phone:req.body.phone,
        }
    );
    book.save(function(err){
       // res.send('Car Booked Successfully');

    });
    Product.findByIdAndUpdate(req.params.id, {isRented: 1}, function (err, product) {
        if (err) return next(err);
        res.send('Car Booked Succesfully');
    });
};



exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.find_car = function (req, res) {
    Product.find({seatcap:req.body.seatcap,model:req.body.model},function(err,product){
        console.log(product);
        res.send(product);
    })};

// exports.booked_cars = function (req, res) {
//         Booking.find(function(err,bookings){

//             res.send(bookings);
//         })};
    


exports.product_update = function (req, res){
    Product.findById(req.params.id, function (err, product) {
        if (product.isRented==0) 
        {
            Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
                if (err) return next(err);
                res.send('car details udpated sucessfully');
            });
        }
        else{
          res.send("Car details Cannot be updated");  
        }

    })
};

exports.product_delete = function (req, res){
    Product.findById(req.params.id, function (err, product) {
        var val=product.isRented;
        console.log(val);
        if (product.isRented==0) 
        {
            Product.findByIdAndRemove(req.params.id, function (err) {
                if (err) 
                return next(err);
                else
                res.send('Car deleted successfully!');
            });

        }
        else{
          res.send("Car Cannot be deleted");  
        }

    })
};



