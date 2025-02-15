"use client";
import { useState } from "react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    // Here you can add an API call to send form data to your server
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">About My Beauty Hub</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Welcome to My Beauty Hub, your ultimate destination for luxury beauty treatments. 
        We are dedicated to providing top-notch services that make you feel relaxed, rejuvenated, 
        and confident in your own skin.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="text-gray-700">
        At My Beauty Hub, our mission is to bring world-class beauty services to everyone. 
        From skincare treatments to hair styling, we ensure that each client receives personalized care and attention.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Why Choose Us?</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Professional & certified beauty experts</li>
        <li>High-quality beauty products & tools</li>
        <li>Relaxing & hygienic environment</li>
        <li>Customized treatments for all skin types</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Visit Us</h2>
      <p className="text-gray-700">
        We are open from <strong>9:00 AM - 8:00 PM (Wednesday to Monday)</strong>.  
        Book an appointment today and experience beauty like never before.
      </p>

      {/* Book Now Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-2xl font-semibold text-center mb-4">Book Your Appointment</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Choose Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Service</option>
                  <option value="Facial Treatment">Facial Treatment</option>
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                  <option value="Makeup Services">Makeup Services</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Submit
                </button>

                <div> |Testing....</div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


