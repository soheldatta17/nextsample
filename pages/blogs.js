import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BallTriangle } from 'react-loader-spinner';
import Image from 'next/image'

const Button = () => {
  const numberOfCards = 20;
  const [catFacts, setCatFacts] = useState([]);
  
  const [loading, setLoading] = useState(true);

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
        setLoading(false)
      } catch (error) {
        console.error('Error fetching cat facts:', error);
        setLoading(false)
      }
    };

    fetchCatFacts();
  }, []);  // Empty dependency array to run only once

  return (
    <>
    {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <BallTriangle color="white" height={100} width={100} />
      </div>
      )}
    <main>
      <div className="main">
      {!loading && (
        <div className="blogs">
          <h1 className="heading">All Facts</h1>
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
                <div className="card1" key={index}>
                   <Link href={`/blog/${fact[1]}&${fact[0]}`}>
                    
                   <div>
                      <h3 style={{ display: 'inline', color: 'red', fontWeight: 'bold' }}>CAT FACTS </h3>
                      <h3 style={{ display: 'inline', color: 'green', fontWeight: 'bold' }}>( ID {fact[1]} )</h3>
                      <br />
                      <br />
                      <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>{fact[0]}</p>
                      <br/>
                    </div>
                    
                  </Link>
                </div>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
        )}
      </div>
      
    </main>
    </>
  );
};

export default Button;
