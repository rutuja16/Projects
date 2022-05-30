const express=require("express");

const authRouter=express.Router();

const {allBlog,blog, category} = require("../controllers/blog.controller")//callback function
//const {}=require("../middlewares/blog.middleware")//middleware


authRouter.get("/blogs",allBlog)
authRouter.get("/blog/:category",category)
authRouter.get("/blog/:category/:id",blog)


module.exports=authRouter;