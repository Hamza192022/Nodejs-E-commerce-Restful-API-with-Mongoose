const express= require("express");
const routers = new express.Router()
const Product = require("../modelsSchema/productSchema")

// post data 
routers.post("/products", async (req, res) => {
    try {
        console.log(req.body);
        const user = new Product(req.body);

        const result = await user.save()
        res.status(201).send(result)
    } catch (e) { res.status(400).send(e) }
})


// get all data  // read data

routers.get("/products", async(req,res)=>{
    try{
       const getresult= await Product.find()
       res.send(getresult)
    }catch(e){console.log(e);}
})


// get individual data  // <=====read individual data=====>
routers.get("/products/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        const getIndividualResult = await Product.findById(_id)
        res.status(201).send(getIndividualResult)

    }catch(e){res.send(e);}
})

// update data
routers.patch("/products/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        
        const updateResult = await Product.findByIdAndUpdate(_id , req.body,{
            new : true
        })
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})


// delete data 
routers.delete("/products/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateResult = await Product.findByIdAndDelete(_id)
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})

module.exports= routers;