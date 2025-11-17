import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

export const connectCloudinary = async () => {
    try {
        const result = await cloudinary.api.ping();
        console.log('Cloudinary connected:', result.status);
    } catch (error) {
        console.log("Cloudinary connection error:", error);
    }
}
