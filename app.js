const express = require("express");

const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const projectRouter = require('./routes/projects');
const mongoDB_connection = require('./config/db')
const path = require('path')

const __dirname = path.resolve();
// console.log(_dirname);


dotenv.config()
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const port = process.env.PORT;
app.use(cors({
    origin: "http://localhost:5173" ,
    credentials: true
}))
app.use('/project' , projectRouter)

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})

app.listen(port , () =>{
    console.log(`your app is runing at the port ${port}`);
})