import express from 'express';
import controller from '../controllers/users';
import authenticateToken from '../middlewares/auth';
import validate from '../middlewares/validation';
import { createUserSchema, updateUserSchema } from '../helpers/schemas';

const router = express.Router();

/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - Create User
 *     summary: User create endpoint
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      422:
 *        description: Unprocessable Entity
 *      500:
 *        description: Internal Server Error
 */
router.post('/users', validate(createUserSchema), authenticateToken, controller.createUser);

/**
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - List Users
 *     summary: Get all users endpoint
 *     responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 */
router.get('/users', authenticateToken, controller.getUsers);

/**
 * @openapi
 * /api/user/{id}:
 *  get:
 *    tags:
 *    - User Detail
 *    summary: Get user by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *    responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Internal Server Error
 */
router.get('/user/:id', authenticateToken, controller.getUser);

/**
 * @openapi
 * /api/user/{id}:
 *  patch:
 *     tags:
 *     - Update User
 *     summary: Updates user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 *       422:
 *         description: Unprocessable Entity
 *       500:
 *         description: Internal Server Error
 */
router.patch('/user/:id', validate(updateUserSchema), authenticateToken, controller.updateUser);

/**
 * @openapi
 * /api/user/{id}:
 *   delete:
 *      tags:
 *      - Delete User
 *      summary: Delete user by ID
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: ID of the user
 *      responses:
 *        204:
 *          description: No Content
 *        404:
 *          description: Not Found
 *        500:
 *          description: Internal Server Error
 */
router.delete('/user/:id', authenticateToken, controller.deleteUser);

export = router;
