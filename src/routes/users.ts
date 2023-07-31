import express from 'express';
import controller from '../controllers/users';
import authenticateToken from '../middlewares/auth';
import validate from '../middlewares/validation';
import { createUserSchema, updateUserSchema } from '../helpers/schemas';

const router = express.Router();

router.post('/users', validate(createUserSchema), authenticateToken, controller.createUser);
router.get('/users', authenticateToken, controller.getUsers);
router.get('/user/:id', authenticateToken, controller.getUser);
router.patch('/user/:id', validate(updateUserSchema), authenticateToken, controller.updateUser);
router.delete('/user/:id', authenticateToken, controller.deleteUser);

export = router;
