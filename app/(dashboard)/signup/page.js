
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

        // Redirect immediately to userDashboard
        router.push("/userDashboard");
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
              className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none"
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
              className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none"
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
                className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none"
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

