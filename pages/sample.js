import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TailSpin } from "react-loader-spinner";
import Image from 'next/image';
import { BallTriangle } from 'react-loader-spinner';

const Button = () => {

    const [catFacts, setCatFacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCatFacts = async () => {
        try {
            let allFacts = [];
            const response = await fetch("https://catfact.ninja/facts?limit=40&max_length=140");
            const data = await response.json();
            await console.log(data.data)
            await setCatFacts([...catFacts, ...data.data]);
            await setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.error('Error fetching cat facts:', error);
            setLoading(false); // Set loading to false even if there's an error
        }
    };

    useEffect(() => { 
        fetchCatFacts();
    }, []);
    console.log(catFacts)
    return (
        <>
        <div className="blogItem">
              {catFacts.length > 0 && catFacts.map((fact, index) => (
                <div className="card" key={index}>
                  <Link href={`/blog/${fact[1]}&${fact[0]}`}>
                    <div>
                      <h3 style={{ display: 'inline', color: 'red', fontWeight: 'bold' }}>CAT FACTS </h3>
                      <h3 style={{ display: 'inline', color: 'green', fontWeight: 'bold' }}>( ID {fact.length} )</h3>
                      <br />
                      <br />
                      <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '18px' }}>{fact.fact}</p>
                      <br/>
                    </div>
                  </Link>
                </div>
              ))}
              
            </div>
            <br/>
              <button onClick={fetchCatFacts}>hiii</button>
              <br/>
            </>
    )
}
export default Button;