import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"


import bcrypt from 'bcrypt';
import  jwt from "jsonwebtoken";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [/*...*/],
    subscribers: [],
})

AppDataSource.initialize()
    .then(async () => {
        console.log("DB initialized");
        const superUserParams = {
            id: "1",
            name: "superuser",
            email: "superuser@test.io",
            password: await bcrypt.hash("superpassword", 10)
        }

      const token = jwt.sign(
          { user_id: superUserParams.id, email: superUserParams.email },
        "your_secret_key_here",
        {
          expiresIn: "365d",
        }
      );

        const user = new User()
      user.id = superUserParams.id
      user.name = superUserParams.name
      user.email = superUserParams.email
      user.password =   superUserParams.password
        user.token = token
        await AppDataSource.manager.save(user)
    })
    .catch((error) => console.log(error))
