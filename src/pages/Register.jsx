import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://phishdetectbackend-1.onrender.com/api/v1/users/register",
        formData
      );

      const { user } = response.data;
      localStorage.setItem("user", JSON.stringify(user));

      alert("Registration Successful!");
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Navbar */}
      <Navbar />

      {/* Form Section */}
      <main className="flex-grow flex justify-center items-center px-4 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md text-gray-800 p-8 sm:p-10 rounded-2xl shadow-md w-full max-w-md border border-blue-100"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-700">
            Create Account
          </h2>

          {/* Username */}
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300"
          >
            Register
          </button>

          {/* Login Redirect */}
          <p className="mt-5 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Login
            </a>
          </p>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegisterForm;
