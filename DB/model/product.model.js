import { Schema, model, Types } from "mongoose";

//create table 
const ProductSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price:{
      type: Number,
    },
    });
const productModel = model('Product',ProductSchema);

export default productModel;

