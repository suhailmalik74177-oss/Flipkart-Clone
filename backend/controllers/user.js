// backend/controllers/user.js
import { user } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import genrateToken from "../utils/genrateToken.js";


export async function Register(req, res) {
  try {
    console.log("Request body:", req.body);
    console.log("File received:", req.file);

    const { FullName, Email_ID, Password } = req.body;

    if (!FullName || !Email_ID || !Password) {
      return res.status(400).json({
        message: "Please enter full detail",
        error: true,
        success: false,
      });
    }

    // check user
    const existingUser = await user.findOne({ Email_ID });
    if (existingUser) {
      return res.status(401).json({
        message: "User already exist",
        error: true,
        success: false,
      });
    }

    // ================ CLOUDINARY UPLOAD ==================
    let imageUrl = "";

    if (req.file) {
      try {
        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream({ folder: "users" }, (error, result) => {
              if (error) reject(error);
              else resolve(result);
            })
            .end(req.file.buffer);
        });

        imageUrl = uploadResult?.secure_url || "";
        console.log("Uploaded image URL:", imageUrl);
      } catch (uploadErr) {
        console.error("Cloudinary upload error:", uploadErr);
        // continue without failing - image is optional
      }
    }
    // =====================================================

    // hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // create user
    const newUser = new user({
      FullName,
      Email_ID,
      Password: hashedPassword,
      ProfilePic: imageUrl,
    });

    const savedUser = await newUser.save();

    const jwtToken = await genrateToken(savedUser);

    // return user object (important!)
    return res.status(201).cookie("accessToken", jwtToken.accessToken, jwtToken.Options).json({
      message: "User registered successfully",
      
      error: false,
      success: true,
      user: {
        id: savedUser._id,
        FullName: savedUser.FullName,
        Email_ID: savedUser.Email_ID,
        ProfilePic: savedUser.ProfilePic || "",
        createdAt: savedUser.createdAt,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      message: "Server error",
      error: true,
      success: false,
    });
  }
}

// LOGIN - keep existing behavior (ensure genrateToken exists elsewhere)
export const login = async (req, res) => {
  try {
    const { Email_ID, Password } = req.body;
    if (!Email_ID || !Password) {
      return res.status(400).json({
        message: "all fields are required",
        error: true,
        success: false,
      });
    }
    const findUser = await user.findOne({ Email_ID });
    if (!findUser) {
      return res.status(404).json({
        message: "user does not exists",
        error: true,
        success: false,
      });
    }

    const comparePass = await bcrypt.compare(Password, findUser.Password);
    if (!comparePass) {
      return res.status(401).json({
        message: "wrong password",
        error: true,
        success: false,
      });
    }

    const jwtToken = await genrateToken(findUser); // keep your token generator
    return res
      .status(200)
      .cookie("accessToken", jwtToken.accessToken, jwtToken.Options)
      .json({
        message: "Login Successfull",
        error: false,
        success: true,
        user: {
          id: findUser._id,
          FullName: findUser.FullName,
          Email_ID: findUser.Email_ID,
          ProfilePic: findUser.ProfilePic || "",
        },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error: true,
      success: false,
    });
  }
};