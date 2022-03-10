const express = require("express");
// model variable initialise with file inside models
const MensRanking = require("../models/mens");
const router = new express.Router();
router.use(express.json())

router.post("/mens",async(req,res)=>{

    try{
        // console.log(req.body)
        // new model_variable of file inside model , which is exported
        // date is in mm-dd-yyformat by default when stored
        const newMan = new MensRanking(req.body);
        console.log(newMan)
        const man = await newMan.save();
        res.status(201).send(man);

    }catch(err){
       res.status(400).send(err);
    }
})


module.exports = router