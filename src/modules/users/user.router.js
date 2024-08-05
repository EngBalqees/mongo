import { Router } from "express";
import * as userController from './user.controller.js';
const router = Router();
router.get('/',userController.getAll);

router.get('/:id',userController.getUser);
router.delete('/:id',userController.deleteUser);
router.put('/:id',userController.updateUser);
export default router;