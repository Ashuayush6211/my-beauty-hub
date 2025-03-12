"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", pincode: "", location: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsAuthenticated(true);
  }, []);

  // Load cart data on mount
  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        const parsedCart = JSON.parse(cartData);
        if (!Array.isArray(parsedCart)) throw new Error("Invalid cart format");

        const formattedCart = parsedCart.map((item: any) => ({
          name: item.name || "Unknown Service",
          price: typeof item.price === "number" ? item.price : parseFloat(item.price) || 0,
        }));

        setCart(formattedCart);
      } catch (error) {
        console.error("Error parsing cart:", error);
        setCart([]);
      }
    } else {
      setCart([]);
    }
  };

  useEffect(() => {
    setTotalPrice(cart.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0));
  }, [cart]);

  // Restrict access to payment
  const handleProceedToPayment = () => {
    if (!isAuthenticated) {
      alert("🔒 Please sign in to proceed with your order.");
      router.push("/auth"); // Redirect to sign-in page
      return;
    }
    setIsPlacingOrder(true);
  };

  // Get live location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
          setFormData({ ...formData, location: googleMapsLink });
        },
        (error) => {
          alert("⚠️ Location access denied. Please allow location access.");
        }
      );
    } else {
      alert("❌ Geolocation is not supported by this browser.");
    }
  };

  // Order submission function
  const handleOrderSubmit = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode || !formData.location) {
      alert("❌ Please fill in all details.");
      return;
    }

    const newOrder = { paymentMethod: "Pay After Service", cart, totalPrice, ...formData };
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Clear cart
    localStorage.removeItem("cart");
    setCart([]);
    setOrderConfirmed(true);
    setIsPlacingOrder(false);

    // Construct WhatsApp message
    const serviceDetails = cart.map((item) => `🔹 ${item.name} - ₹${parseFloat(item.price).toFixed(2)}`).join("\n");

    const whatsappMessage = `🛒 *New Order Confirmed!*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n🏠 *Address:* ${formData.address}, ${formData.pincode}\n📍 *Location:* ${formData.location}\n\n📋 *Services Ordered:*\n${serviceDetails}\n\n💰 *Total Amount:* ₹${totalPrice.toFixed(2)}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919702358551&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {orderConfirmed || cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="p-2 border-b flex justify-between">
                <span>{item.name}</span>
                <span>₹{parseFloat(item.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-2 text-xl font-bold text-green-600">
            Total Amount: ₹{totalPrice.toFixed(2)}
          </div>

          <button
            onClick={handleProceedToPayment}
            className="mt-4 px-6 py-3 bg-gray-600 text-white font-bold text-lg rounded-md hover:bg-gray-700 transition"
          >
            Pay After Service (COD)
          </button>
        </div>
      )}

      {/* Order Details Form */}
      {isPlacingOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Full Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />

            {/* Get Location Button */}
            <button
              onClick={handleGetLocation}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition mb-2"
            >
              📍 Get Location
            </button>

            <input
              type="text"
              placeholder="Google Maps Location"
              value={formData.location}
              readOnly
              className="w-full p-2 border rounded-md mb-2 bg-gray-100"
            />

            <button
              onClick={handleOrderSubmit}
              className="mt-4 w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
            >
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
