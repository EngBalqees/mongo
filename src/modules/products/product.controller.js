import productModel from "../../../DB/model/product.model.js";

// add product
export const addproduct = async (req,res) =>{
  try{
    const {title,description,category,price} = req.body;
    const product = await productModel.create({title,description,category,price});
    return res.status(201).json({message:"success",product});
  }catch(error){
    return res.status(500).json({message:"catch error",error});
  }
}

// get all products
export const getAll = async(req,res)=>{
    const products = await productModel.find();
     return res.status(200).json({message:"success",products});
  }
  
  //get product by id
  export const getProduct = async(req,res)=>{
    const {id} = req.params;
    const product = await productModel.findById(id);
    return res.status(200).json({message:"success",product:product});
  }
  
  //update one product price
  export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const {price} = req.body;
  
    const product = await productModel.updateOne({confrimEmail:true},{price:price});
    if(!product.modifiedCount > 0){
       return res.status(400).json({message:"can't update product"});
    }
    return res.status(200).json({message:"success",product});
  }
  //delete product
  export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    const product = await productModel.deleteOne({_id:id});
    return res.status(200).json({message:"success"});
  }
