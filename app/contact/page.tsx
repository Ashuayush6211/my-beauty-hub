"use client";
import Image from "next/image";

const contacts = [
  {
    name: "Sonali More",
    role: "Admin & Customer Relations",
    image: "/Sony4.jpeg", // Replace with actual image URL
    description:"Sonali is the Admin & Customer Service at My Beauty Hub, where she oversees customer relations, ensuring an exceptional experience for all our clients. She handles customer inquiries and ensures smooth operations at the hub.",
    email: "sonali@mybeautyhub.com",
    phone: "+91 9702358551",
  },
  {
    name: "Chandrakala Kowrati",
    role: "Customer Service Executive",
    image: "/Anus.jpeg", // Replace with actual image URL
    description: "Chandrakala is a customer care executive in beauty hub services excels in providing personalized assistance, resolving inquiries, and ensuring a seamless and delightful client experience.",
    email: "hello@mybeautyhub.com",
    phone: "+91 9324118816",
  },
  {
    name: "Siva Kowrati",
    role: "Marketing & Web Developer",
    image: "/Siva1.jpg", // Replace with actual image URL
    description: "Siva is a skilled marketing and website developer who combines strategic branding with cutting-edge web design to drive engagement and business growth.",
    email: "sivavenkat.aj@gmail.com",
    phone: "+91 9892845335",
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
              className="w-full h-60  mb-1 mx-auto"
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
