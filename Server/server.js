//import required packages
const bodyParser = require('body-parser');
const express = require('express');
const  mongoose  = require('mongoose');
path = require('path');
cors = require('cors');

//MongoDB url
var mongodDatabase = 'mongodb://localhost:27017/meancruddemo';

//create express server
const app = express();
mongoose.Promise = global.Promise;

//Connect to MongoDB Database
mongoose.connect(mongodDatabase,{ useNewUrlParser:true }).then(
    () =>{
        console.log('DataBase is Connected...')
    },
    err =>{
        console.log('There is problem while connection to database ' + err);
    }
);

//All the express routes
const employeeRoutes = require('../Routes/Employee.route');

//Convert incoming data to JSON Format
app.use(bodyParser.json());

//Enabled CORS
app.use(cors());

//setup for the server port number
const port = process.env.PORT || 4000;

//Routes Configuration
app.use('/employees',employeeRoutes)




//Start our express server
const server = app.listen(port,function(){
    console.log("Server Listening to Port : " +port);
});


