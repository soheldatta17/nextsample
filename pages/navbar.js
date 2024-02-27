import React, { useState, useEffect } from 'react';
import "./globals.css";
import Link from 'next/link';

const Bar = () => {

    return (
        <>
            <main>
                <div className="main">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/post">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/blogs">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </>
    );
};

export default Bar;
