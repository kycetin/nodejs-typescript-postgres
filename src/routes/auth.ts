import express from 'express';
import  validate  from '../middlewares/validation';
import { loginSchema} from '../helpers/schemas';
import controller from '../controllers/auth';
const router = express.Router();


/**
 * @openapi
 * '/api/login':
 *  post:
 *     tags:
 *     - Login
 *     summary: Login user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.post('/login',validate(loginSchema), controller.login);

export = router ;
