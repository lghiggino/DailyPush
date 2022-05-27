import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Post } from "../models/Post";
import crypto from "crypto"

@Resolver()
export class PostResolver {
    private data: Post[] = [
        {
            id: crypto.randomUUID(), 
            title: "This could not be prevented, says only country where this continually happens", 
            content: "lorem20",
            author: {
                name: "Leonardo Ghiggino",
            }
        }
    ]
    
    @Query(() => [Post])
    async posts(){
        return this.data;
    }
}