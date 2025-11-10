import jwt from 'jsonwebtoken'

export const genrateToken = async (data)=>{
     try {
            const{Email_ID,_id}=data
            const accessToken=jwt.sign({Email_ID,_id},process.env.JWT_SECRETS , {expiresIn:'7d'})

            const Options= {
                    httpOnly:true,
                    expire:new Date(Date.now()*7*24*60*60*1000),
                    
            } 
            return {accessToken , Options}

     } catch (error) {
        console.log(error);
        
     }
}