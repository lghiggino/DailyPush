import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from "crypto"
import { TypeNameMetaFieldDef } from "graphql";

let data: User[] = [
    { id: crypto.randomUUID(), name: "Diego", email: "diego@dora.com" },
    { id: crypto.randomUUID(), name: "Servico", email: "servico@buffet.com" },
    { id: crypto.randomUUID(), name: "DaleDale", email: "daledale@sexta-feira.com" }
]

@Resolver()
export class UserResolver {
    @Query(() => [User]!)
    async users() {
        return data;
    }

    @Query(() => User!)
    async getUserByEmail(
        @Arg('email') email: string
    ) {
        const user = data.find(user => user.email === email)

        return user
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string,
        @Arg('email') email: string
    ) {
        const user: User = {
            id: crypto.randomUUID(),
            name,
            email
        }

        console.log(`Em createUser this data is ${data}`)

        data.push(user)

        return user
    }

    @Mutation(() => [User])
    async deleteUser(
        @Arg('id') id: string
    ) {
        const newData = data.filter(user => user.id !== id)
        data = newData

        return data
    }
}

//https://youtu.be/6SZOPKs9SUg?t=2482