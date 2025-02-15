"use client";
import { useState } from "react";
import Image from "next/image";

// Services data
const services = [
  {
    name: "Facial Treatment",
    image: "/Image2.jpg", // Replace with your image URL
    price: "₹1,500",
    description: "Deep cleansing, exfoliation, and skin rejuvenation for a radiant glow.",
  },
  {
    name: "Hair Styling",
    image: "/Image1.jpg", // Replace with your image URL
    price: "₹2,000",
    description: "Get a stylish new look with professional haircuts and styling.",
  },
  {
    name: "Manicure & Pedicure",
    image: "/Image4.jpg", // Replace with your image URL
    price: "₹800",
    description: "Pamper your hands and feet with a relaxing manicure and pedicure session.",
  },
  {
    name: "Makeup Services",
    image: "/Image5.jpg", // Replace with your image URL
    price: "₹2,500",
    description: "Flawless makeup application for special occasions and events.",
  },
];

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log("Booking Details:", formData);
    setIsModalOpen(false);
    alert("Your booking has been confirmed!");
  };

  const handleBookNowClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <Image 
              src={service.image} 
              alt={service.name} 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <p className="text-lg font-bold mt-2">{service.price}</p>
            <button
              onClick={() => handleBookNowClick(service)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal for booking */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>

            {/* Booking Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md mr-2"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black px-6 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
