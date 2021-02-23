const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const templateSchema = new mongoose.Schema(
    {
        fileName: {
            type: String,
            
        },
        title:{
            type:String,
            required: true,
        },
        link:{
            type:String,
            required:true
        }

      
    },
    { timestamps: true }
);

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;