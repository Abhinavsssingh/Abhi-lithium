const AuthorModel= require("../models/authorModel")
const pubmodel = require("../models/pubmodel")
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.insertMany(author)
    res.send({data: authorCreated})
}


const createpublisher= async function (req, res) {
    let publisher = req.body
    let authorCreated = await pubmodel.insertMany(publisher)
    res.send({data: authorCreated})
}

const createBook= async function (req, res) {
    // let Book = req.body
    let specificBook = await bookModel.find().populate('author_id')
    console.log(specificBook)
    // let bookCreated = await AuthorModel.insertMany(Book)
    res.send({data: "message"})
}

const createBook1= async function (req, res) {
    let Book = req.body
    let aid = Book.author_id
    let pid = Book.publisher_id
    if(( await authorModel.findOne({_id:aid}))&&(await pubmodel.findOne({_id:pid}))){
        bookcreated= await bookModel.create(Book)
        return res.send({data:Book})
    }
    else{
         res.send({data:"Send valid id"})
    }
    // let bookCreated = await AuthorModel.insertMany(Book)
    
}

const getfullbookdata= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: books})
}



const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const question4= async function (req, res) {
    // For the books published by 'Penguin' and 'HarperCollins', update this key to true.
    let obj1 = await pubmodel.findOne({name: "penguin" })
    let id1 = obj1._id
    let obj2 = await pubmodel.findOne({name: "HarperCollins" })
    let id2 = obj2._id

    let newbooks = await bookModel.updateMany(
        {publisher_id:[id1,id2]},
        {  $set: {"isHardCover":true} },
        {new:true}
        )
    let updatedbooks = await bookModel.find({"isHardCover":true})
    res.send({data:updatedbooks})
}

const question5= async function (req, res) {
    
    let arr1 = await authorModel.find({rating:{$gt: 3.5} })
    let newarr=[]
    for(i of arr1){
        iid=i._id
        // let price11= await bookModel.findOne
       let tosend= await bookModel.findOneAndUpdate(
            {author_id:iid},
            {$inc:{"price":10}},
            {new:true} 
        )
        newarr.push(tosend)
    }
    res.send({mess:newarr})
    
    
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createpublisher= createpublisher
module.exports.createBook= createBook
module.exports.createBook1= createBook1
module.exports.getfullbookdata= getfullbookdata
module.exports.question4= question4
module.exports.question5= question5
