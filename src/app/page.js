import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import "./globals.css";

const Button = () => {
  const numberOfCards = 6; // Change this number as needed

  return (
    <>
      <main>
      <Image
            src="/next.jpg"
            width={720}
            height={320}
            alt="Picture of the author"
            className="Homeimage"
          />
        <div className="main">
          
          <Link href="/post">
            <h1 className="heading">Get Started</h1>
          </Link>
        </div>

      </main>
    </>
  );
};

export default Button;
