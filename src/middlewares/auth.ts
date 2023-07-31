import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const SECRET_KEY: string | undefined = process.env.SECRET_KEY;

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  if (SECRET_KEY === undefined || !isString(SECRET_KEY)) {
    return res.status(500).json({ message: 'Internal server error. Secret key missing or invalid.' });
  }

  jwt.verify(token, SECRET_KEY as Secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req.body.user = user;
    next();
  });
};

export default authenticateToken;
