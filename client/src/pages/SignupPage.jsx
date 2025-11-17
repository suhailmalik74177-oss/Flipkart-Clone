import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/Api";
import { useUser } from "./UserContext";
import { FiUploadCloud } from "react-icons/fi";
import { connectDB } from "../../../backend/config/db";

function SignupPage() {
  const { saveUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
const [file, setFile] = useState(null);

const handleImageUpload = (e) => {
  const f = e.target.files[0];
  if (f) {
    setFile(f);
    setProfilePic(URL.createObjectURL(f));
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
formData.append("FullName", name);
formData.append("Email_ID", email);
formData.append("Password", password);
formData.append("profilePic", file); // actual file!


      const res = await register(formData);

      if (res.success) {
        saveUser(name, email, res.token);
        alert("🎉 Account created successfully!");
        navigate("/");
      } else {
        setError(res.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden w-[900px] max-w-full flex-col sm:flex-row">
        {/* 🟩 Left Side (Desktop Only) */}
        <div className="hidden sm:flex w-2/5 bg-green-600 text-white flex-col justify-center items-center p-8 relative">
          <h2 className="text-3xl font-semibold mb-3">Sign Up</h2>
          <p className="text-sm text-green-100 mb-4 text-center leading-relaxed">
            Create your Flipkart account and start shopping smarter!
          </p>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
            alt="Signup Illustration"
            className="w-4/5 mt-4"
          />
          <p className="absolute bottom-4 text-xs opacity-80">
            © 2025 Flipkart Clone UI
          </p>
        </div>

        {/* 🧩 Right Side (Form Section) */}
        <div className="w-full sm:w-3/5 p-6 sm:p-10 flex flex-col justify-center">
          {/* ===== Mobile Header ===== */}
          <div className="block sm:hidden text-center mb-6">
            <img
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
              alt="Signup Illustration"
              className="w-32 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-green-700">Create Account</h2>
            <p className="text-gray-600 text-sm mt-1">
              Join Flipkart to start shopping
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-md p-2">
                {error}
              </p>
            )}

            {/* 👤 Profile Image Upload */}
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="relative w-24 h-24">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-green-200 object-cover shadow-md hover:scale-105 transition-transform"
                />
                <label className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full cursor-pointer shadow hover:bg-green-700 transition">
                  <FiUploadCloud size={18} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Upload a profile picture (optional)
              </p>
            </div>

            {/* Name */}
            <input
              type="text"
              value={name}
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              placeholder="Enter Email Id"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            {/* Password */}
            <input
              type="password"
              value={password}
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

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
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 cursor-pointer font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
