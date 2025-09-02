const express = require('express');
const projectModel = require('../models/project-model')
const rout = express.Router();



rout.get('/' , async(req , res) =>{
    const projects = await projectModel.find();
    // console.log(projects);
    if(projects){
    res.status(200).json(projects);
    } else {
        res.status(401).json({error:'projects is nod found'});
    }

})

rout.post('/' ,async(req , res)=>{


    console.log(req.body);
    const {title , image , about , github , liveurl ,fremwork } = req.body;
    const project = projectModel.create({title , image , about ,fremwork , github , liveurl})
    if(project)  res.status(200).json({message:'project is saved'});
    else res.status(400).json({error:'unvalid data'});
   

})


module.exports = rout;