"use client";
import { useState } from "react";
import Image from "next/image";
import { FaShoppingCart, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Services data
const services = [
  {
    name: "Body Massage",
    image: "/Body Massage.jpg",
    price: "999",
    description: "A therapeutic treatment that relaxes muscles, improves circulation, and relieves stress through skilled touch and pressure techniques.",
    rating: 4.5,
  },
  {
    name: "Body Polishing",
    image: "/Body Polishing.jpg",
    price: "1,999",
    description: "A skincare treatment that exfoliates, hydrates, and rejuvenates the skin for a smooth and radiant glow.",
    rating: 4,
  },
  {
    name: "Full Body Spa",
    image: "/Full Body Spa.jpg",
    price: "2,999",
    description: "A luxurious wellness treatment that combines massage, exfoliation, and hydration to relax the body and rejuvenate the skin.",
    rating: 5,
  },
  {
    name: "Basic Hair Cut",
    image: "/Basic Haircut.jpg", // Replace with your image URL
    price: "149",
    description: "A simple and stylish trim to maintain or refresh your haircut with precision and ease.",
    rating: 5,
  },
  {
    name: "Advance Hair Cut",
    image: "/Advance Haircut.jpg", // Replace with your image URL
    price: "349",
    description: "A customized haircut with expert styling techniques for a trendy, tailored, and polished look.",
    rating: 4.5,
  },
  {
    name: "Manicure & Pedicure",
    image: "/Manicure Pedicure.png", // Replace with your image URL
    price: "749",
    description: "A luxurious hand and foot care treatment that includes nail grooming, exfoliation, and hydration for healthy, polished nails and soft skin.",
    rating: 5,  
  },
  {
    name: "Head Massage",
    image: "/Head Massage.jpg", // Replace with your image URL
    price: "249",
    description: "A relaxing treatment that soothes the scalp, relieves stress, and improves blood circulation for overall well-being.",
    rating: 5,
  },
  {
    name: "Advance Head Massage",
    image: "/Advance Head Massage.jpg", // Replace with your image URL
    price: "499",
    description: "A rejuvenating head massage using advanced techniques to relieve tension, boost circulation, and promote deep relaxation.",
    rating: 4.5,
  },
  {
    name: "Highlight Starting",
    image: "/Highlight.jpg", // Replace with your image URL
    price: "1,999",
    description: "A hair coloring technique that adds dimension and brightness by lightening selected strands for a stylish, radiant look.",
    rating: 5,
  },
  {
    name: "Facial Detan with Eyebrow",
    image: "/Facial Dtan Eyebrow.jpg", // Replace with your image URL
    price: "499",
    description: "A skin treatment that removes tan, brightens the complexion, and includes eyebrow shaping for a refreshed and polished appearance.",
    rating: 5,
  },
  {
    name: "Facial + Bleach + Eyebrow",
    image: "/Facial Bleach Eyebrow.jpg", // Replace with your image URL
    price: "499",
    description: "A treatment that lightens facial hair and skin tone, coupled with eyebrow shaping to enhance your natural features and create a glowing look.",
    rating: 5,
  },
  {
    name: "O3 Professional Facial only",
    image: "/O3 Facial.jpg", // Replace with your image URL
    price: "1,199",
    description: "An advanced facial treatment that uses O3 technology to deep cleanse, brighten, and rejuvenate the skin for a radiant, refreshed complexion.",
    rating: 5,
  },
  {
    name: "Hydra Facial only",
    image: "/Hydra Facial.jpg", // Replace with your image URL
    price: "2,499",
    description: "A non-invasive facial treatment that deeply hydrates, exfoliates, and revitalizes the skin for a smooth, glowing complexion.",
    rating: 5,
  },
  {
    name: "Normal Wax Full Hand",
    image: "/Normal Wax Hand.jpg", // Replace with your image URL
    price: "299",
    description: "A hair removal treatment using traditional wax to smoothly remove hair from the full length of the arms.",
    rating: 5,
  },
  {
    name: "Normal Wax Full leg",
    image: "/Normal Wax Leg.jpg", // Replace with your image URL
    price: "299",
    description: "A hair removal treatment using traditional wax to remove hair from the full length of the legs, leaving smooth, soft skin.",
    rating: 5,
  },
  {
    name: "Rica Wax Full Hand",
    image: "/Rica Wax Hand.jpg", // Replace with your image URL
    price: "399",
    description: "A gentle hair removal treatment using Rica wax that effectively removes hair from the full arms while nourishing and soothing the skin.",
    rating: 5,
  },
  {
    name: "Rica Wax Full leg",
    image: "/Rica Wax Leg.WEBP", // Replace with your image URL
    price: "399",
    description: "A hair removal treatment using Rica wax that smoothly removes hair from the full legs, leaving the skin soft, hydrated, and irritation-free.",
    rating: 5,
  },
  {
    name: "Nail Art",
    image: "/Nail Art.jpg", // Replace with your image URL
    price: "399",
    description: "A creative and decorative treatment that enhances nails with unique designs, colors, and embellishments for a stylish and personalized look.",
    rating: 5,
  },
  {
    name: "Mehandi",
    image: "/Mehandi.jpeg", // Replace with your image URL
    price: "399",
    description: "A traditional art of applying intricate henna designs on the skin, creating beautiful and temporary body adornments.",
    rating: 5,
  },
  {
    name: "MakeUp Services",
    image: "/Makeup.png", // Replace with your image URL
    price: "399",
    description: "Professional makeup application for various occasions, enhancing natural features with customized techniques for a flawless look.",
    rating: 5,
  },
];

const Services = () => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  const addToCart = (serviceName: string) => {
    if (typeof window === "undefined") return;

    const existingCart = localStorage.getItem("cart");
    let cartData = existingCart ? JSON.parse(existingCart) : [];

    const service = services.find((s) => s.name === serviceName);
    if (!service) {
      alert("Service not found!");
      return;
    }

    const newCartItem = {
      name: service.name,
      price: Number(service.price.replace(/,/g, "")), // Convert price string to number
    };

    cartData.push(newCartItem);
    localStorage.setItem("cart", JSON.stringify(cartData));

    setCart([...cartData]); // Update state
    alert(`${service.name} added to cart!`);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const totalStars = 5;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt key="half" className="text-yellow-500" />}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        We serve only at Kalyan & Dombivli locations now.
      </h1>
      <h4 className="text-xl font-bold text-center mb-6">
        Add your services into cart. We are also available through Call & Whatsapp
      </h4>

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
            <p className="text-lg font-bold mt-2">₹{service.price}</p>
            <div className="flex items-center justify-between mt-4">
              {renderStars(service.rating)}
              <button
                onClick={() => addToCart(service.name)}
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaShoppingCart size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Keep ONLY this export statement at the END
export default Services;
