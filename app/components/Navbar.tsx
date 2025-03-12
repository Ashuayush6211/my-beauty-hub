"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);;
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Fetch user from localStorage
    const userData = localStorage.getItem("user");
    if (userData !== null) {
      try {
        const storedUser = JSON.parse(userData);
        setUser(storedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Remove corrupted data
      }
    }
     // Fetch cart count from localStorage
     const cartData = localStorage.getItem("cart");
     if (cartData) {
       const cartItems = JSON.parse(cartData);
       setCartCount(cartItems.length);
     }
   }, []);
  
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="relative">
      {/* Top Bar */}
      <div className="bg-black text-white font-semibold h-16 flex items-center justify-between px-6 md:px-12">
        {/* Left Side: Contact Info & Book Now */}
        <div className="flex items-center space-x-8">
        <a href="tel:+919702358551" className="flex items-center space-x-2 hover:underline hover:text-gray-300 transition">
              <span>📞</span> <span>+919702358551</span>
            </a>
            <a href="mailto:sonali@ursbeautyhub.com" className="flex items-center space-x-2 hover:underline hover:text-gray-300 transition">
              <span>📧</span> <span>sonali@ursbeautyhub.com</span>
            </a>
          <button
            onClick={() => router.push("/services")}
            className="bg-white text-red-500 px-3 py-2 font-bold whitespace-nowrap"
            >
            Book Now
          </button>
        </div>

        {/* Scrolling Marquee */}
        <div className="overflow-hidden w-2/3">
          <div className="whitespace-nowrap flex space-x-8 animate-marquee">
            <span className="px-8">🎉 Flat 20% Off on Bridal Makeup</span>
            <span className="px-8">💆‍♀️ Book Your Beauty Session Today!</span>
            <span className="px-8">💅 Nail Art & Spa - Best Prices Available! 🎊</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <Link href="/">
            <img
              src="/Urs.jpg"
              alt="Urs Beauty Hub Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-gray-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </div>
          <a
            href="https://wa.me/919892845335"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 font-semibold"
          >
            WhatsApp
          </a>
            {/* Cart Button */}
            <button onClick={() => router.push("/cart")} className="relative bg-gray-200 p-2 rounded-full">
            🛒 Cart 
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-2 rounded-full">{cartCount}</span>}
          </button>

          {/* Show "My Orders" only if authenticated */}
          {isAuthenticated && (
              <Link href="/my-orders" className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                My Orders
              </Link>
            )}
            
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 font-semibold">
                Welcome, {user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/auth")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
