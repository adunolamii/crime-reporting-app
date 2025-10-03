// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// import React from 'react'
// import Header from '../Header';

// const page = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         console.log('Signup successful:', data);

//         // Redirect to the dashboard
//         router.push('/overview');
//       } else {
//         const errorData = await res.json();
//         setError(errorData.error || 'An error occurred');
//       }
//     } catch (err) {
//       console.error('Error signing up:', err);
//       setError('An unexpected error occurred');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
    
//     <div>
//       <Header/>
      
//     <div className="max-w-lg mx-auto   bg-white shadow-lg m-auto rounded-lg p-6 sm:p-8 border border-gray-200">
//     <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Your Account</h2>
//     {error && <div className="bg-red-100 text-red-600 p-3 mb-4 rounded-md">{error}</div>}
//     <form onSubmit={handleSubmit}>
//       <div className="mb-5 ">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           placeholder="Enter your full name"
//           className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
//         />
//       </div>
//       <div className="mb-5">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           placeholder="Enter your email"
//           className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
//         />
//       </div>
//       <div className="mb-5">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           placeholder="Enter your password"
//           className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`w-full py-3 text-white font-semibold rounded-lg transition-colors ${
//           isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:text-purple-600 hover:bg-black'
//         }`}
//       >
//         {isSubmitting ? 'Signing Up...' : 'Sign Up'}
//       </button>
//     </form>
//     <p className="text-sm text-center text-gray-500 mt-6">
//       Already have an account?{' '}
//       <a href="/signin" className="text-blue-600 hover:underline">
//         Log In
//       </a>
//     </p>
//   </div>
//   </div>
    
//   )
// }

// export default page


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../Header";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Signup failed");
      } else {
        toast.success("Signup successful!");
        setForm({ username: "", email: "", password: "" });

        // Redirect to login page after 2s
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      }
    } catch (err) {
      toast.error("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-6">
      {/* Toast container */}
      
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className=" text-white block mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              placeholder="Enter username"
            />
          </div>

          {/* Email */}
          <div>
            <label className=" text-white block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              placeholder="Enter email"
            />
          </div>

          {/* Password with toggle */}
          <div>
            <label className="text-white block mb-1">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-600"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-600 font-medium hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
