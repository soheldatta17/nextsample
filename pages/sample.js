import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BallTriangle } from 'react-loader-spinner';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';

const Button = () => {
  const [catFacts, setCatFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const fetchCatFacts = async () => {
    setTimeout(async () => {
      try {
        let allFacts = [];
        const response = await fetch("https://catfact.ninja/facts?limit=10&max_length=140");
        const data = await response.json();
        console.log(data.data);
        setCatFacts([...catFacts, ...data.data]);
        setLoading(false);
        setTotal(total + 10);
      } catch (error) {
        console.error('Error fetching cat facts:', error);
        setLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchCatFacts();
  }, []); // Empty dependency array to run only once

  return (
    <>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <BallTriangle color="white" height={100} width={100} />
        </div>
      )}
      <main>
        {!loading && (
          <InfiniteScroll
            dataLength={catFacts.length}
            next={fetchCatFacts}
            hasMore={total < 40}
            loader={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BallTriangle color="white" height={100} width={100} />
              </div>
            }
            endMessage={<p style={{ color: 'white' }}>{total}</p>}
          >
            <div className="main">
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
                <br></br>
                <br></br>
                <div className="blogItem">
                  {catFacts.length > 0 ? (
                    catFacts.map((fact, index) => (
                      <div className="card1" key={index}>
                        <Link href={`/blog/${fact.length}&${fact.fact}`}>
                          <div>
                            <h3 style={{ display: 'inline', color: 'red', fontWeight: 'bold' }}>CAT FACTS </h3>
                            <h3 style={{ display: 'inline', color: 'green', fontWeight: 'bold' }}>( ID {fact.length} )</h3>
                            <br />
                            <br />
                            <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>{fact.fact}</p>
                            <br />
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </div>
              </div>
            </div>
          </InfiniteScroll>
        )}
        <br />
        <button style={{ display: 'none'}} className="button" onClick={fetchCatFacts}>
          LOAD MORE
        </button>
        <br />
      </main>
    </>
  );
};

export default Button;
