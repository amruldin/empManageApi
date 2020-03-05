let Employee = require('../models/Employee');

exports.add = (req,res)=>{
    let employee = new Employee(req.body);
    employee.save().then(
        employee => {res.status(200).json({'Employee':'Emp added Scuccessfully'})}
    ).catch(
        err=>{res.status(400).send("Can't save data")}
    );
};



// Get Employee info
exports.getEmployees = (req,res)=>{
    Employee.find((err,employees)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(employees)
        }
    });
};




// Defined to edit route
exports.editEmployee = (req,res)=>{
    let id = req.params.id;
    Employee.findById(id,(err,employee)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(employee)
        }
    });
};

// Defined to update route

exports.updateEmployee = (req,res)=>{
    let id = req.params.id;
    Employee.findById(id,(err,employee)=>{
        if(!employee){
            res.status(404).send("Recored Not Found!");

        }
        else{
            employee.EmployeeFirstName = req.body.EmployeeFirstName;
            employee.EmployeeLastName = req.body.EmployeeLastName;
            employee.EmployeeAddress = req.body.EmployeeAddress;
            employee.EmployeeStatus = req.body.EmployeeStatus;

            employee.save().then(employee=>{
                res.json('Update Complete');
            }).catch(err =>{
                res.status(400).send("unable to update the database!");
            });
        }
    })

}


// Delete employee
exports.deleteEmployee = (req,res)=>{
    Employee.findByIdAndRemove({_id: req.params.id},(err,employee)=>{
        if(err) res.json(err);
        else res.json('Success, Removed!');
    })
}