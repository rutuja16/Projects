const express=require("express")
const BlogData=require("../database/blog.db")

const allBlog=(req,res)=>{
    res.json({
        blogs:BlogData
    })
}

const category=(req,res)=>{
    const {category}=req.params
    console.log(category);

    const blogCategory=BlogData.filter(ele=> ele.category==category);
    //console.log(blogCategory);

    res.json({
        message:"Success",
        data:blogCategory
    })
}

const blog=(req,res)=>{
    const category=req.params.category
    const id=req.params.id;
    //const {category,id}=req.params
    console.log(category,id);

    const blogId=BlogData.filter(ele=>(ele.id==id && ele.category==category));
    //
    console.log("a",blogId);


    res.json({
        message:"Success",
        data:blogId
    })
}


module.exports={allBlog,category,blog}


