import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity({name: "user"}) 
export class User {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({nullable: true})
    token: string
}
