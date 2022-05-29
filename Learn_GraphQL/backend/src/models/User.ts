import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true,
    },
    active: {
        type: Boolean
    }
}) 

Schema.plugin(uniqueValidator)

export default mongoose.model('User', Schema);