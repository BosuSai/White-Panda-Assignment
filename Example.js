const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/route');
 //
 
const app = express();

const mongoose = require('mongoose');
let dev_db_url ='mongodb+srv://Bosu_Sai:Charan3@charan-mgpjk.mongodb.net/test?retryWrites=true&w=majority'

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});