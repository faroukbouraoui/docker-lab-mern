const mongoose = require ('mongoose')

const blogSchema = new mongoose.Schema({
   
    fileName: {
        type: 'String',
        required: true,
    },
    title:{
        type:String,
        required:true,

    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,

    }

})

module.exports= mongoose.model('Blog',blogSchema)