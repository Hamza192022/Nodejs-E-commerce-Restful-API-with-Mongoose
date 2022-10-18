const mongoose = require("mongoose");
const validator = require("validator");


const orderScheme = new mongoose.Schema({
    cust_id : {
        type : Number,
        required : true
    },
    product_id:{
        type : Number,
        required : true
    },
    orders_descrip:{
        type: String
    },
    orders_totalprice:{
        type :Number,
        required : true
    },
    orders_reviews:{
        type :Number,
        required : true
    }

})

// <============create collection============>
const Order = new mongoose.model("order",orderScheme);

module.exports=Order