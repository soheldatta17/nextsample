import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image'

const Button = () => {
  const numberOfCards = 6;
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    const fetchCatFacts = async () => {
      try {
        let allFacts = [];
        for (let i = 0; i < numberOfCards; i++) {
          const response = await fetch("https://catfact.ninja/fact");
          const data = await response.json();
          allFacts.push([data.fact, data.length]);
        }

        console.log(allFacts);
        setCatFacts(allFacts);
      } catch (error) {
        console.error('Error fetching cat facts:', error);
      }
    };

    fetchCatFacts();
  }, []);  // Empty dependency array to run only once

  return (
    <main>
      <div className="main">

        <div className="blogs">
          <h1 className="heading">RECENT FACTS</h1>
          <br></br>
          <div className="catimage">
            <Image
              src="/cat.gif"
              width={250}
              height={250}
              alt="Picture of the author"
              className="Homeimage"
            />
          </div>
          <br></br><br></br>
          <div className="blogItem">
            {catFacts.length > 0 ? (
              catFacts.map((fact, index) => (
                <div className="card" key={index}>
                  <Link href={`/blog/${fact[1]}&${fact[0]}`}>

                    <h3>CAT FACTS ( ID {fact[1]} )</h3>
                    <br></br>
                    <p>{fact[0]}</p>

                  </Link>
                </div>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Button;
