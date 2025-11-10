import { user } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { genrateToken } from "../utils/genrateToken.js";


//signup page 
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