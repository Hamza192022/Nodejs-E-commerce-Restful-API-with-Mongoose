const mongoose = require("mongoose");
const validator = require("validator");


const productScheme = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_descrip :{
        type : String
    },
    product_price:{
        type: Number,
        required:true

    },
    product_color:{
        type : String
    },
    product_quantity:{
        type: Number,
        required:true
    },
    product_image:{
        type :String,
        required : true
    },
    product_amount :{
        type :Number
    }

})

// <============create collection============>
const Product = new mongoose.model("product",productScheme);

module.exports=Product