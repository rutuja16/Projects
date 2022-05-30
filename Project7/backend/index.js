require('dotenv').config();
const express=require("express")

const app=express();

const port=process.env.PORT || 8080;
//console.log(process.env)

const myRouter=require("./routes/blog.route")

//middleware
const cors=require("cors")
app.use(cors())

app.use(express.json());//to display json data

app.use("/",myRouter)

app.listen(port,()=>{
    console.log("server running at port"+ port)
})