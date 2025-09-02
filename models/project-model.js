const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {type:String , require:true},
    image: {type:String , require:true} ,
    about : {type:String , require:true} ,
    fremwork: [{type:String , require:true}] ,
    github:{type:String , require:true} ,
    liveurl:{type:String}
})
module.exports = mongoose.model('projects' , ProjectSchema);