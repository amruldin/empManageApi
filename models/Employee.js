const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Employee = new Schema({
    EmployeeFirstName:{
        type:String
    },

    EmployeeLastName:{
        type:String
    },
    EmployeeAddress:{
        type: String
    },
    EmployeeStatus:{
        type:String
    }
},{
    
    collection:'Employee'
});


module.exports = mongoose.model('Employee',Employee);



