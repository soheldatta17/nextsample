import React, { useState, useEffect } from 'react';
import "./globals.css";
import Link from 'next/link';
const Button = () => {
  const numberOfCards = 6;
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    const fetchCatFacts = async () => {
      try {
        let allFacts = [];
        for (let i = 0; i < numberOfCards; i++) {  // Use numberOfCards variable here
          const response = await fetch("https://catfact.ninja/fact");
          const data = await response.json();
          console.log(data)
          allFacts.push([data.fact, data.length]);  // Use push instead of concat to add a single fact
        }

        console.log(allFacts);  // Remove 'await' before console.log
        setCatFacts(allFacts);
      } catch (error) {
        console.error('Error fetching cat facts:', error);
      }
    };

    return fetchCatFacts();  // Remove the return statement here
  }, []);  // Empty dependency array to run only once

  return (
    <>
      <main>
        <div className="main">
          <nav>
            <ul>
              <li><a href="/post">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blogs">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="blogs">
            <h1 className="heading">Blogs</h1>
            <div className="blogItem">
              {catFacts.length > 0 ? (
                catFacts.map((fact, index) => (
                  <div className="card" key={index}>
                    <a href={`/blog/${fact[1]}`} target="_blank">
                      <h3>CAT FACTS ( ID {index + 1} )</h3>
                      <br></br>
                      <p>{fact[0]}</p>

                    </a>
                  </div>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Button;
