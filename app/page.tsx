"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";

export default function Home() {
  const router = useRouter(); // Initialize router

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-8 bg-[#f9f5f0]">
      <h1 className="text-center text-5xl font-bold my-8 text-pink-700">
        Welcome to Urs Beauty Hub
      </h1>

      {/* Video & Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-half max-w-6xl mt-10 gap-8">
        {/* Left - Video */}
        <div className="w-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg"
          >
            <source src="/Bitty.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Beauty Services @ your doorstep
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Your beauty and wellness deserve nothing but the best! At Urs Beauty
            Hub, we bring the world of luxury beauty services right to your
            doorstep. Whether you need a soothing massage to melt away stress, a
            rejuvenating skincare treatment for a radiant glow, or expert hair
            and nail services to elevate your style, we’ve got you covered.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>🌟 Expert Beauticians</li>
            <p>
              Our team consists of certified professionals with years of
              experience in the beauty and wellness industry. Every service is
              executed with precision, ensuring flawless results and a luxurious
              experience.
            </p>
            <li>🛡️ 100% Hygiene & Safety</li>
            <p>
              Your safety is our priority! We adhere to strict hygiene
              protocols, using sterilized tools, disposable kits, and
              high-quality products to give you a worry-free beauty session.
            </p>
            <li>🏡 At-Home Convenience</li>
            <p>
              No need to step out or wait in long queues! Enjoy premium salon
              services from the comfort of your home. Just book an appointment,
              and we’ll take care of the rest.
            </p>
            <li>💰 Affordable Luxury</li>
            <p>
              We believe self-care should be accessible to all! Our services are
              priced to ensure you enjoy high-end beauty treatments without
              breaking the bank.
            </p>
            <li>🎯 Customized Treatments</li>
            <p>
              We understand that every individual is unique. Whether you have
              sensitive skin, specific hair concerns, or personal preferences,
              our experts will customize treatments to suit your beauty needs.
            </p>
            <li>💖 Trusted by Thousands</li>
            <p>
              With a growing family of satisfied clients, Urs Beauty Hub is
              synonymous with quality, trust, and excellence. Join us and
              experience the difference!
            </p>
            <strong className="text-blue-600">
            Easily book your services with the Book Now button or contact us instantly via Call, Email, or WhatsApp by clicking the details at the top of the page! 🚀
            </strong>
          </ul>

          
        </div>
      </div>
    </div>
  );
}
