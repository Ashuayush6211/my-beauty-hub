// app/signin/page.tsx (if using TypeScript)
"use client";

import { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>

        <form>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-sm font-medium">Username</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>

          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">Submit</button>
        </form>

        <div className="text-center mt-4">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <button onClick={() => setIsSignUp(false)} className="text-blue-600">Sign In</button>
            </span>
          ) : (
            <span>
              Don't have an account?{" "}
              <button onClick={() => setIsSignUp(true)} className="text-blue-600">Sign Up</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
