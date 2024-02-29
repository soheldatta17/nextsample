import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

const Blog = () => {
    const [blog, setBlog] = useState(null); // Use null as the initial state for a single blog
    useEffect(() => {
        console.log("useEffect is running");

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/java');
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="main">
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
                {blog && ( // Check if blog exists before rendering
                    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                        <h3 style={{ color: 'blue' }}>Title: {blog.title}</h3>
                        <br></br>
                        <p style={{ color: 'green' }}>Content: {blog.content}</p>
                        <br></br>
                        <p style={{ color: 'red' }}>Author: {blog.author}</p>
                    </div>

                )}
                <br></br><br></br>
                <Link href="/blogs"><button className="button">GO BACK</button></Link>
            </div>
        </>
    );
}

export default Blog;
