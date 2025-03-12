"use client";
import { useState } from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">About Urs Beauty Hub</h1>

      {/* Section 1 - Image Left, Content Right */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <img
          src="/Image2.jpg"
          alt="Luxury Beauty Treatment"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-6 md:mt-0 md:w-1/2">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Urs Beauty Hub, where luxury meets convenience, and self-care becomes an experience like never before. We are more than just a beauty service—we are your personal haven for relaxation, transformation, and confidence. At Urs Beauty Hub, we believe that beauty is not just about looking good but feeling incredible from within. Whether you’re preparing for a special occasion, indulging in much-needed self-care, or simply looking to enhance your natural glow, our expert beauticians bring salon-quality treatments right to your doorstep. From flawless bridal makeup and expert hair styling to rejuvenating facials, soothing massages, nail art, and advanced skincare, we provide a wide range of beauty services tailored to your unique needs. Our commitment to hygiene, safety, and customer satisfaction ensures that you receive premium-quality treatments in the comfort of your home, without compromising on luxury. With a passion for perfection and a mission to redefine at-home beauty care, Urs Beauty Hub is here to pamper you, uplift your confidence, and help you shine inside and out. Because you deserve nothing but the best—every single day! ✨💖
          </p>
        </div>
      </div>

      {/* Section 2 - Content Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:mr-8 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            At Urs Beauty Hub, we are dedicated to delivering world-class beauty services that go beyond expectations, combining the finest luxury treatments, rejuvenating experiences, and expert care to ensure every client not only looks their best but feels truly pampered, confident, and radiant from the inside out.
          </p>
        </div>
        <img
          src="/Image1.jpg"
          alt="Beauty Hub Mission"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* Section 3 - Content Only */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Professional & certified beauty experts</li>
          <li>High-quality beauty products & tools</li>
          <li>Relaxing & hygienic environment</li>
          <li>Customized treatments for all skin types</li>
        </ul>
      </div>

      {/* Section 4 - Content Only */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Service Locations</h2>
        <p className="text-gray-700">
          Currently serving <strong>Kalyan & Dombivli</strong>. Expanding soon across <strong>Mumbai & Thane</strong> districts.
        </p>
      </div>

      {/* Section 5 - Content Only */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">To Book Our Services</h2>
        <p className="text-gray-700">
          <strong className="text-blue-600">
            Click the "Book Now" button at the top or contact us instantly via Call, Email, or WhatsApp! 🚀
          </strong>
        </p>
      </div>
    </div>
  );
}
