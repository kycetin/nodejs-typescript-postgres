import { Request, Response } from 'express';
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

import bcrypt from 'bcrypt';
import { ulid } from 'ulid';

const createUser = async (req: Request, res: Response) => {
    const user = new User()

    const { name, email, password } = req.body;

      const isExist = await AppDataSource.manager.findOneBy(User, { email: email} );
        if (isExist) {
      return res.status(409).send("User Already Exist");
    }

   const encryptedPassword = await bcrypt.hash(password, 10);


  try {
      user.id = ulid()
      user.name = name
      user.email = email
      user.password = encryptedPassword 

      await AppDataSource.manager.save(user)
      res.status(201).json({"data": user, "message": "User created successfully."});
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error while creating user.' });
  }
};

const getUsers = async (req: Request, res: Response) => {

  try {
  const allUsers = await AppDataSource.manager.find(User);
    res.status(200).json(allUsers);
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error fetching users.' });
  }
};

const getUser = async (req: Request, res: Response) => {
    const userId: string = req.params.id

  try {
      const userDetail = await AppDataSource.manager.findOneBy(User, { id: userId} );
      if (userDetail){
        res.status(200).json(userDetail);
      }
      else{
        res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error fetching user detail.' });
  }
};

const updateUser = async (req: Request, res: Response) => {

    const userId: string = req.params.id
    const { ...updatedFields } = req.body

  try {
      const userDetail = await AppDataSource.manager.findOneBy(User, {id: userId});
      if (userDetail){
        Object.assign(userDetail, updatedFields);
        await AppDataSource.manager.save(userDetail);
        res.status(200).json(userDetail);
      }
      else{
        res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error fetching user.' });
  }
};

const deleteUser = async (req: Request, res: Response) => {

    const userId: string = req.params.id

  try {
      const userDetail = await AppDataSource.manager.findOneBy(User, {id: userId});
      if (userDetail){
        await AppDataSource.manager.remove(userDetail);
        res.status(204).json(userDetail);
      }
      else{
        res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error fetching user.' });
  }
};
export default { createUser, getUsers, getUser, updateUser, deleteUser };

