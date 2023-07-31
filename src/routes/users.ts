import express from 'express';
import controller from '../controllers/users';
import authenticateToken from '../middlewares/auth';

const router = express.Router();
router.post('/users', authenticateToken, controller.createUser);
router.get('/users', authenticateToken, controller.getUsers);
router.get('/user/:id', authenticateToken, controller.getUser);
router.patch('/user/:id', authenticateToken, controller.updateUser);
router.delete('/user/:id', authenticateToken, controller.deleteUser);

export = router;
