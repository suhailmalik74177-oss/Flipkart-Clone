import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/Api";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    setName("");
    setEmail("");
    setPassword("");

            try {
            const userData = {
                FullName: name,
                Email_ID: email,
                Password: password
            };
            
            const jsonData = JSON.stringify(userData);
            
            console.log("Object format:", userData);
            console.log("JSON format:", jsonData);
            
            register(userData)
                alert("Account created successfully!");
        } catch (error) {
            console.log(error);
        }
  };

  

    


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden w-[850px]">
        {/* Left Side - Info Section */}
        <div className="w-2/5 bg-blue-600 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-semibold mb-3">Sign Up</h2>
          <p className="text-sm text-blue-100 mb-4 text-center">
            Create your account to start shopping with Flipkart!
          </p>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
            alt="Signup Illustration"
            className="w-3/4 mt-4"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-3/5 p-8 flex flex-col justify-center">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Enter Your FullName"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                placeholder="Enter Email Id"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                placeholder="Create Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-2"
              />
            </div>

            <p className="text-sm text-gray-500">
              By continuing, you agree to Flipkart’s{" "}
              <span className="text-blue-600 cursor-pointer">Terms of Use</span> and{" "}
              <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
            </p>


            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-sm font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 cursor-pointer font-medium hover:underline"
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
