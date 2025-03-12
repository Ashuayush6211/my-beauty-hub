"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the total price from localStorage
    const orderData = localStorage.getItem("order");
    if (orderData) {
      const { totalPrice } = JSON.parse(orderData);
      setTotalPrice(totalPrice);
    }
  }, []);

  // Function to validate card details
  const validateCardDetails = () => {
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert("Please fill in all the card details.");
      return false;
    }
    if (cardNumber.length !== 16 || isNaN(Number(cardNumber))) {
      alert("Please enter a valid 16-digit card number.");
      return false;
    }
    if (cvv.length !== 3 || isNaN(Number(cvv))) {
      alert("Please enter a valid 3-digit CVV.");
      return false;
    }
    return true;
  };

  // Handle OTP Generation
  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCardDetails()) return;

    // Generate a 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setIsOtpSent(true);

    alert(`OTP Sent to your registered mobile number: ${otpCode}`); // Simulating OTP sending
  };

  // Handle OTP Verification
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== generatedOtp) {
      alert("Invalid OTP. Please try again.");
      return;
    }

    alert(`Payment of ₹${totalPrice} successful!`);

    // Clear cart and order data after successful payment
    localStorage.removeItem("cart");
    localStorage.removeItem("order");

    // Redirect to success page
    router.push("/success");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p className="text-lg font-semibold">Total Amount: ₹{totalPrice}</p>

      {!isOtpSent ? (
        <form onSubmit={handleProceedToPayment} className="mt-4">
          {/* Card Number */}
          <div className="mb-4">
            <label className="block font-medium">Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={16}
              className="w-full p-2 border rounded-md"
              required
              placeholder="Enter 16-digit card number"
            />
          </div>

          {/* Cardholder Name */}
          <div className="mb-4">
            <label className="block font-medium">Cardholder Name:</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
              placeholder="Enter name as on card"
            />
          </div>

          {/* Expiry Date & CVV */}
          <div className="flex gap-4">
            <div className="mb-4 w-1/2">
              <label className="block font-medium">Expiry Date (MM/YY):</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                maxLength={5}
                className="w-full p-2 border rounded-md"
                required
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label className="block font-medium">CVV:</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
                className="w-full p-2 border rounded-md"
                required
                placeholder="3-digit CVV"
              />
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="mt-4">
          {/* OTP Input */}
          <div className="mb-4">
            <label className="block font-medium">Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full p-2 border rounded-md"
              required
              placeholder="Enter 6-digit OTP"
            />
          </div>

          {/* Verify OTP Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-md hover:bg-green-700 transition"
          >
            Verify OTP & Confirm Payment
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
