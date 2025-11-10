import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    FullName:{type: String},
    Email_ID: {type: String, require: true, unique:true},
    Password:{type: String, require: true},
})

export const user = mongoose.model("User", userSchema)