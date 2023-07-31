import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req.body.user = user;
    next();
  });
};

export default authenticateToken;
