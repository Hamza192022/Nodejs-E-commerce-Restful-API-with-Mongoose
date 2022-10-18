const express = require("express");
const app = express();
const port = process.env.port || 8000
const cors = require("cors")
// getting routes
const customerRouters = require("./routes/customer_route");
const productRouters = require("./routes/product_route");
const orderRouters = require("./routes/order_route");

// <=============DATABASE==================>
require("./db/conn")
//<==============model & Schema=============>
// const Student = require("./model/students")

//  middleware 
app.use(cors())
app.use(express.json())
app.use(customerRouters);
app.use(productRouters);
app.use(orderRouters);




app.listen(port, () => {
    console.log(`listening to the ${port}`);
})