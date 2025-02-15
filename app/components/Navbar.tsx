"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import for Next.js 13+

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsModalOpen(false);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleCancel = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar Section */}
      <div className="bg-red-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-sm text-dark-blue-700">
            <a href="mailto:hello@mybeautyhub.in" className="mr-6 flex items-center">
              <i className="fa fa-envelope mr-2"></i> hello@mybeautyhub.in
            </a>
            <span className="flex items-center">
              <i className="fa fa-phone mr-2"></i> +91 9892845335
            </span>
          </div>

          <div className="text-sm text-red-700 flex items-center space-x-4">
            <span className="hb-timeandday">Open hours: 9:00 AM - 8:00 PM Wed-Mon</span>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/Mybeautyhub.png" alt="My Beauty Hub Logo" className="h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link href="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-800 hover:text-gray-600">Home</Link>
            <Link href="/about" className="block text-gray-800 hover:text-gray-600">About</Link>
            <Link href="/services" className="block text-gray-800 hover:text-gray-600">Services</Link>
            <Link href="/contact" className="block text-gray-800 hover:text-gray-600">Contact</Link>
          </div>
        </div>
      )}

      {/* Modal for Booking */}
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
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Your Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Choose Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="Facial Treatment">Facial Treatment</option>
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                  <option value="Makeup Services">Makeup Services</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md">
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
    </nav>
  );
};

export default Navbar;
l