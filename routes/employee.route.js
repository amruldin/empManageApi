const express = require('express');

const app = express();

const employeeRoute = express.Router();

const employeeController = require('../controller/employeeController');

// require your model

let Employee = require('../models/Employee');


// define storing route
// employeeRoute.route('/add',employeeController.add);
employeeRoute.post('/add',employeeController.add);
employeeRoute.get('/delete/:id',employeeController.deleteEmployee);
employeeRoute.post('/update/:id',employeeController.updateEmployee);
employeeRoute.get('/edit/:id',employeeController.editEmployee);
employeeRoute.route('/').get(employeeController.getEmployees);


employeeRoute.get('*',(req,res)=>{
    res.json('Page not found!');
})



module.exports = employeeRoute;