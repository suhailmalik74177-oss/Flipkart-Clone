import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export async function register(data) {
  try {
    const response = await api.post("/api/register", data);
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
