"use client";
import { useState } from "react";
import Navbar from "../Navbar";

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="relative">
      {/* ✅ Pass toggleForm as onBookNow prop */}
      <Navbar onBookNow={toggleForm} />

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center mb-4">Book Your Appointment</h2>
            <form>
              {/* Form Fields */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Phone</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Choose Service</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="Facial Treatment">Facial Treatment</option>
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                  <option value="Makeup Services">Makeup Services</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Carousel Section */}
      <div className="relative">
        <img src="/carousel-image.jpg" alt="Carousel" className="w-full h-80 object-cover" />
      </div>
    </div>
  );
}
