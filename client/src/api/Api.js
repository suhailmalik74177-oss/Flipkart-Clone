import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  // ❌ remove Content-Type, axios will set it automatically for FormData
});

export async function register(formData) {
  try {
    const response = await api.post("/api/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return {
      success: true,
      message: response.data?.message || "Registration successful!",
      user: response.data?.user,
      token: response.data?.token,
    };
  } catch (error) {
    console.error("Register API Error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Failed to register. Please check your details.",
    };
  }
}


export async function login(data) {
  try {
    const response = await api.post("/api/login", data);
    return {
      success: true,
      message: response.data?.message || "Login successful!",
      user: response.data?.user,
      token: response.data?.token,
    };
  } catch (error) {
    console.error("Login API Error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Invalid email or password. Please try again.",
    };
  }
}
