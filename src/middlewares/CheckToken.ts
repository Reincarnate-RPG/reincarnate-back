import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token is missing!' });
  }

  try {
    const secret = process.env.SECRET!;

    jwt.verify(token, secret);
    return next();
  } catch (err) {
    res.status(400).json({ error: 'Token invalid!' });
  }
};

export { checkToken };
