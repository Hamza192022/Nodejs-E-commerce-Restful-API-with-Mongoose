const mongoose = require("mongoose");
const validator = require("validator");


const customerScheme = new mongoose.Schema({
    cust_name : {
        type : String,
        required : true,
        minlength : 3
    },
    cust_phone :{
        type : String,
        required:true
    },
    cust_email :{
        type : String, 
        required:true,
        unique : [true , " Email already present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw  new Error("INVALID EMAIL");
            }
        }
    },
    
    cust_address :{
        type :String,
        required : true
    }

})

// <============create collection============>
const Customer = new mongoose.model("customer",customerScheme);

module.exports=Customer