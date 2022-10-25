// bookName, authorName, category and year

const mongoose1=require("mongoose")
const bookschema= new mongoose1.Schema({
    Bookname:{
        type:String,
        unique:true
    },
    AuthorName:{
        type:String,
        required:true
    },
    Catagory:{
        type:String,
        // required:true,
        enum:["Classics","Graphic Novel", "Mystery","Fantasy", "Historical", "Fiction", "Horror" ,"Literary Fiction"]
    },
    publishYear:{
        type:String,
        default:2021
    },
    prices:{
        indianprice:String,
        europeanprice:String
    },
    tags:[String],
    totalPages:Number,
    stockAvailable:Boolean




}, {timestamps: true })

module.exports=mongoose1.model('Book', bookschema)