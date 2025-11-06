import axios from 'axios';


const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true

})

export async function register(data){
    try{
        const response = await api.post('api/register',data)
        console.log(response);
        
    }catch(error){
        console.log(error);
    } 
}

export async function login(data) {
    try {
        const response =await api.post('api/login',data)
        console.log(response);
        
    } catch (error) {
        console.log(error);
            
    }
    
}