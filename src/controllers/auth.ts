import { Request, Response } from 'express';
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"
import jwt, { Secret } from 'jsonwebtoken';

import bcrypt from 'bcrypt';

const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

      const user = await AppDataSource.manager.findOneBy(User, { email: email} );
    console.log(user)

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.SECRET_KEY as Secret,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }    
      else{
    res.status(400).send("Invalid Credentials");
      }
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error fetching user.' });
  }
};

export default { login };
