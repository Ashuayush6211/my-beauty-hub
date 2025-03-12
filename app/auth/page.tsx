"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleAuth = () => {
    if (!formData.email || !formData.password) {
      alert("❌ Please fill in all fields.");
      return;
    }

    if (isSignUp) {
      // Validate sign-up fields
      if (!formData.username || !formData.phone || !formData.confirmPassword) {
        alert("❌ Please fill in all fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("❌ Passwords do not match.");
        return;
      }

      // Store user data
      const newUser = {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("✅ Account Created! Please sign in.");
      setIsSignUp(false);
    } else {
      // Handle Sign In
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (storedUser.email === formData.email) {
        alert(`✅ Welcome back, ${storedUser.username}!`);
        router.push("/");
      } else {
        alert("❌ User not found. Please Sign Up first.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-md mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-2 border rounded-md mb-2"
        />

        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full p-2 border rounded-md mb-2"
          />
        )}

        <button
          onClick={handleAuth}
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-4 w-full text-blue-600 text-sm"
        >
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
