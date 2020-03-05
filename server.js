const express = require('express');
const path = require('path');
const bodyP = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
let port = process.env.PORT || 4000;

let employeeRoute = require('./routes/employee.route');
let config = require('./db');

mongoose.Promise = global.Promise;

mongoose.connect(config.db,{userNewUrlParser:true}).then(
()=> {console.log('Connected to the Employee Database')}
, err => {console.log('Can not connect' + err)}
);



app.use(bodyP.json());
app.use(cors());
app.use('/employee',employeeRoute);



const server = app.listen(port,()=>{
    console.log('Server is up and running!');

})
