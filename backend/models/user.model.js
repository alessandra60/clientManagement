const mongoose= require ('mongoose');
const validator=require('mongoose-validator');

const Schema = mongoose.Schema;

//****MONGODB SCHEMA */
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength: 5,
        maxlength: 50
    }, 
    phone: {
        type: Number,
        required: true,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        
    }, 
    company: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true
    }  
});

const User=mongoose.model('User', userSchema);

module.exports=User;
