"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after 5 seconds
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Payment Successful!</h2>
      <p>Your payment has been received. Thank you for choosing our services!</p>
      <p className="mt-2 text-gray-600">Redirecting to home page in 5 seconds...</p>
    </div>
  );
};

export default Success;
