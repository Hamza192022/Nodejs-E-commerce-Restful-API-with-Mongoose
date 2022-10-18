
const express= require("express");
const routers = new express.Router()
const Customer = require("../modelsSchema/customerSchema")
// <==========using promises===========>

// app.post("/students", (req, res) => {

//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })

// <======using async await============>
// post data 
routers.post("/customers", async (req, res) => {
    try {
        console.log(req.body);
        const user = new Customer(req.body);

        const result = await user.save()
        res.status(201).send(result)
    } catch (e) { res.status(400).send(e) }
})


// get all data  // read data

routers.get("/customers", async(req,res)=>{
    try{
       const getresult= await Customer.find()
       res.send(getresult)
    }catch(e){console.log(e);}
})


// get individual data  // <=====read individual data=====>
routers.get("/customers/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        const getIndividualResult = await Customer.findById(_id)
        res.status(201).send(getIndividualResult)

    }catch(e){res.send(e);}
})

// update data
routers.patch("/customers/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        
        const updateResult = await Customer.findByIdAndUpdate(_id , req.body,{
            new : true
        })
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})


// delete data 
routers.delete("/customers/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateResult = await Customer.findByIdAndDelete(_id)
        res.status(201).send(updateResult)

    }catch(e){res.status(404).send(e);}
})

module.exports= routers;