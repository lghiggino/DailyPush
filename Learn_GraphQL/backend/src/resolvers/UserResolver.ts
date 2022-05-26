import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from "crypto"

@Resolver()
export class UserResolver {
    private data: User[] = [
        {id: crypto.randomUUID(), name: "Diego", email: "diego@dora.com"}
    ]

    @Query(() => [User])
    async users(){
        return this.data;
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string,
        @Arg('email') email: string
    ){
        const user: User = {
            id: crypto.randomUUID(),
            name,
            email
        }

        this.data.push(user)

        return user
    }

    @Mutation(() => [User])
    async deleteUser(
        @Arg('id') id: string
    ){
        const newData = this.data.filter(item => item.id !== id)
        this.data = newData

        return this.data
    }
}

//https://youtu.be/6SZOPKs9SUg?t=2482