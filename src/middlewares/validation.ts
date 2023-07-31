import { NextFunction, Request, Response } from 'express';
// export default createUserSchema;
const validate = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  const {
    error
  } = schema.validate(req.body);
  if (error) {
    res.status(422)
      .send(error.details[0].message);
  } else {
    next();
  }
};

export default validate;
