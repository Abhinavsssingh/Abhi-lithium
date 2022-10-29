const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    publisher_id: {
        type: ObjectId,
        ref:"publisher"
    },
    price: Number,
    ratings: Number,

    isHardCover:{
        type:Boolean,
        default:false
    }

});


module.exports = mongoose.model('LibraryBook', bookSchema)
