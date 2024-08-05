import { Router } from "express";
import * as productController from './product.controller.js';



const router = Router();
router.post('/',productController.addproduct);
router.get('/',productController.getAll);
router.get('/:id',productController.getProduct);
router.delete('/:id',productController.deleteProduct);
router.put('/:id',productController.updateProduct);

export default router;