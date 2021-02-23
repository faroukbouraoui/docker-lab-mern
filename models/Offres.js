const mongoose = require ('mongoose')

const offersSchema = new mongoose.Schema({
    
    fileName: {
        type: 'String',
        required: false,
    },
    
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    
    servicesOffre:
       
      [  
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required:true
        }
    ],
    

    
    template:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Template",
            
        }
    ]


})
module.exports = mongoose.model('Offres',offersSchema)