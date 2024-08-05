import userRouter from  './modules/users/user.router.js';
import connectdb from '../DB/connection.js';
import auth from './modules/auth/auth.router.js';
import productRouter from './modules/products/product.router.js';

export const initApp = (app,express)=>{
    connectdb();
    app.use(express.json());
    app.use('/users',userRouter);
    app.use('/products',productRouter);
    app.use('/auth', auth);
    app.use('*',(req,res) =>{
        return res.status(404).json({message:"page not found"});
    })
}