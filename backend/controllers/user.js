
//signup page 
import { user } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";

export async function Register(req, res) {
  try {
    console.log("Request send", req.body);
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
    const User = await user.findOne({ Email_ID });
    console.log(User, "Existing user");

    if (User) {
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
        // cloudinary upload from buffer
        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream({ folder: "users" }, (error, result) => {
              if (error) reject(error);
              else resolve(result);
            })
            .end(req.file.buffer);
        });

        imageUrl = uploadResult.secure_url;
        console.log("Uploaded image URL:", imageUrl);

      } catch (uploadErr) {
        console.log("Cloudinary upload error:", uploadErr);
      }
    }
    // =====================================================

    // hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // create user
    const registerUser = new user({
      FullName,
      Email_ID,
      Password: hashedPassword,
      ProfilePic: imageUrl,   // <-- SAVE IMAGE URL HERE
    });

    await registerUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      error: false,
      success: true,
    });

  } catch (error) {
    console.log("body error", error);
    return res.status(500).json({
      message: "Server error",
      error: true,
      success: false,
    });
  }
}


//LOGIN PAGE

export const login = async (req, res) => {
    try {
        const { Email_ID, Password } = req.body //dstructure
        console.log(req.body);
        
         if (!Email_ID || !Password) {
            return res.status(400).json({
                message: 'all fields are required',
                error: true,
                success: false
            })
        }
         const findUser = await user.findOne({ Email_ID }) // check if user already exists or not
        console.log(findUser);
        
         if(!findUser){
             return res.status(404).json({
                message: 'user does not exists',
                error: true,
                success: false
            })
         }

         const comparePass = await bcrypt.compare(Password , findUser.Password )

         if(!comparePass){
             return res.status(401).json({
                message: 'wrong password',
                error: true,
                success: false
            })
         }

         const jwtToken=await genrateToken(findUser)
        
         return res.status(200)
         .cookie('accessToken' , jwtToken.accessToken , jwtToken.Options )
         .json({
                message: 'Login Successfull',
                error: false,
                success: true
            })


    } catch (error) {
        console.log(error);
    }

}