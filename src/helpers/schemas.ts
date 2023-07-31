import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const createUserSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

export const updateUserSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
});
