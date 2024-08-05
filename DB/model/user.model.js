import mongoose, { Schema, model, Types } from 'mongoose';

//create table 
const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age:{
      type: Number,
    },
    confrimEmail: {
        type:Boolean,
        default: false,
    },
    gender: {
        type: String,
        ENUM: ['Male','Female']
    }
},{
         timestamps: true
    });
const userModel = model('User',UserSchema);

export default userModel;


