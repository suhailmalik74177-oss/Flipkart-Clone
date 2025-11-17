import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    FullName: { type: String, required: true },
    Email_ID: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    ProfilePic: { type: String, default: "" }, // <-- ADD THIS
},{timestamps:true});

export const user = mongoose.model("User", userSchema);
