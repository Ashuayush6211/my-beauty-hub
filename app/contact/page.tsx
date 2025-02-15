"use client";
import Image from "next/image";

const contacts = [
  {
    name: "Sonali More",
    role: "Lead Stylist",
    image: "/Sonali.jpg", // Replace with actual image URL
    description: "John is an expert in creating stunning hair styles and making our clients look their best.",
    email: "sonali@mybeautyhub.in",
    phone: "+91 1234567890",
  },
  {
    name: "Anu Kowrati",
    role: "Makeup Artist",
    image: "/Anus.jpeg", // Replace with actual image URL
    description: "Jane specializes in flawless makeup application for all occasions.",
    email: "anu@mybeautyhub.in",
    phone: "+91 9876543210",
  },
  {
    name: "Yashu Singh",
    role: "Facial Specialist",
    image: "/Yashu.png", // Replace with actual image URL
    description: "Emma provides the best facial treatments that leave your skin glowing and rejuvenated.",
    email: "yashu@mybeautyhub.in",
    phone: "+91 5647382910",
  },
];

function Contact() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Our Experts</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={contact.image}
              alt={contact.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-full mb-4 mx-auto"
            />
            <h2 className="text-xl font-semibold text-center">{contact.name}</h2>
            <p className="text-center text-gray-500">{contact.role}</p>
            <p className="text-gray-600 mt-2">{contact.description}</p>
            
            <div className="mt-4">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="text-blue-500">{contact.phone}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
