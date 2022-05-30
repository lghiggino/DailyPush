import mongoose from "mongoose";
import User from "./User";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: User.schema,
        required: true,
    }
}) 

export default mongoose.model('Book', Schema);