import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { login } from "../api/Api";

function LoginPage() {
  const { saveUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userData = {
        Name: name,
        Email_ID: email,
        Password: password,
      };

      const res = await login(userData);

      if (res.success) {
        saveUser(name || res.user?.name || "User", email, res.token);
        alert("Login successful!");
        navigate("/");
      } else {
        setError(res.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden w-[850px] max-w-full flex-col sm:flex-row">
        {/* ===== Left Side (Desktop Only) ===== */}
        <div className="hidden sm:flex w-2/5 bg-green-600 text-white flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-semibold mb-3">Login</h2>
          <p className="text-sm text-green-100 mb-4 text-center">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Login Illustration"
            className="w-3/4 mt-4"
          />
        </div>

        {/* ===== Right Side (Form Section) ===== */}
        <div className="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
          {/* ===== Mobile Top Section ===== */}
          <div className="block sm:hidden text-center mb-6">
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="Login Illustration"
              className="w-32 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-green-700">Welcome Back!</h2>
            <p className="text-gray-600 text-sm mt-1">
              Login to continue shopping
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-md p-2 text-center">
                {error}
              </p>
            )}

            {/* Name Input */}
            <div>
              <input
                type="text"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                value={email}
                placeholder="Enter Email Id"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-lg font-semibold text-sm tracking-wide transition ${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 active:scale-95"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 text-center mt-6">
            New to Flipkart?{" "}
            <Link
              to="/signup"
              className="text-green-600 cursor-pointer font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
