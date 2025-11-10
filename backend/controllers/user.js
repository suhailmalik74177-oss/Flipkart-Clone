import { user } from "../models/userModel.js";
import bcrypt from 'bcryptjs';

export async function Register (req,res){
    try{
        
    const{FullName,Email_ID, Password} =req.body
    console.log('Request send',req.body);  
        if(!FullName || !Email_ID || !Password){
            return res.status(400).json({
                message: 'Pleass enter full detail',
                error: true,
                success: false
            })
        }

        const User = await user.findOne({Email_ID})
        
        console.log(User , 'Existing user');

        if (User){
           return  res.status(401).json({
                message:'user already exist',
                error: true,
                success: false
            })
        }
        

        const hasPassword = await bcrypt.hash(Password, 10)
        const registerUser = new user({
            FullName,Email_ID,Password:hasPassword
        })

        await registerUser.save()
        return  res.status(201).json({
                message:'User registered successfully',
                error: false,
                success: true
            })
        console.log(registerUser);
        

    }catch(error){
        console.log('body error',error);
        
    }
}

export async function Login(req,res){
    try {
        const {Email_ID,Password}=req.body
        console.log('Request body in login', req.body);

        const findUser = await user.findOne({Email_ID})

        if(findUser){
             const compPass = bcrypt.compare(Password,findUser.Password)
        }
        
    } catch (error) {
        
    }
} 