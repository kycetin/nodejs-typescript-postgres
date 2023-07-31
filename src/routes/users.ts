import express from 'express';
import controller from '../controllers/users';

const router = express.Router();
router.post('/users', controller.createUser);
router.get('/users', controller.getUsers);
router.get('/user/:id', controller.getUser);
router.patch('/user/:id', controller.updateUser);
router.delete('/user/:id', controller.deleteUser);

export = router;
