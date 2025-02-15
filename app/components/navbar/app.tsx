import type { AppProps } from 'next/app';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Optional: for custom styling

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Logo at the top-left corner */}
      <div className={styles.logoContainer}>
        <Image
          src="/Mybeautyhub.png" // Path to your logo in the public folder
          alt="Logo"
          width={100} // Set the width of the logo
          height={50} // Set the height of the logo
        />
      </div>

      {/* Render the page component */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;