import Link from 'next/link';
import React from 'react';
import "./globals.css";

const Button = () => {
  const numberOfCards = 6; // Change this number as needed

  return (
    <>
      <main>
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
