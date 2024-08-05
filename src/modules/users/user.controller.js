import userModel from "../../../DB/model/user.model.js";

//get users
export const getAll = async(req,res)=>{
  const users = await userModel.find();

   return res.status(200).json({message:"success",users});
}

//get user by id
export const getUser = async(req,res)=>{
  const {id} = req.params;
  const user = await userModel.findById(id);
  return res.status(200).json({message:"success",user:user});
}

//update one user
export const updateUser = async(req,res)=>{
  const {id} = req.params;
  const {email} = req.body;

  const user = await userModel.updateOne({confrimEmail:true},{email:email});
  if(!user.modifiedCount > 0){
     return res.status(400).json({message:"can't update user"});
  }
  return res.status(200).json({message:"success",user});
}
//delete user
export const deleteUser = async(req,res)=>{
  const {id} = req.params;
  const user = await userModel.deleteOne({_id:id});
  return res.status(200).json({message:"success"});
}