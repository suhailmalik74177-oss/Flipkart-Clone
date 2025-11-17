import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/Api";
import { useUser } from "./UserContext";

function SignupPage() {
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
        FullName: name,
        Email_ID: email,
        Password: password,
      };

      const res = await register(userData);

      if (res.success) {
        saveUser(name, email, res.token);
        alert("🎉 Account created successfully!");
        navigate("/");
      } else {
        setError(res.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden w-[850px]">
        {/* Left Side */}
        <div className="w-2/5 bg-green-600 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-semibold mb-3">Sign Up</h2>
          <p className="text-sm text-green-100 mb-4 text-center">
            Create your account to start shopping with Flipkart!
          </p>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
            alt="Signup Illustration"
            className="w-3/4 mt-4"
          />
        </div>

        {/* Right Side */}
        <div className="w-3/5 p-8 flex flex-col justify-center">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
              type="text"
              value={name}
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2"
            />
            <input
              type="email"
              value={email}
              placeholder="Enter Email Id"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2"
            />
            <input
              type="password"
              value={password}
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 py-2"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded-sm font-semibold transition ${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-5">
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
