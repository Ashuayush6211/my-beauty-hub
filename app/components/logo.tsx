

import Link from "my-beauty-hub\public\Mybeautyhub.png";
import Image from "next/image";

const LogoLink = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/"> {/* Use a valid route, e.g., homepage */}
        <Image
          src="/Mybeautyhub.png" // Path to your image in the public folder
          alt="My Beauty Hub Logo"
          width={150} // Set the width of the image
          height={50} // Set the height of the image
          className="text-xl font-bold text-gray-800" // Add your Tailwind CSS classes here
        />
      </Link>
    </div>
  );
};

export default LogoLink;