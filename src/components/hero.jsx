import React, { useState, useEffect } from 'react';
import profileImage from '../assets/WhatsApp Image 2025-04-09 at 15.44.28_4495f69c.jpg';
import './hero.css';

function Hero() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust this value as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full ${isScrolled ? 'fixed top-0 z-10 bg-gray-800 shadow-md py-2' : 'py-6 bg-gray-800'}`}>
            <div className={`container mx-auto text-center flex ${isScrolled ? 'items-center justify-between' : 'flex-col items-center p-1 hero-container'}`}>
                {/* Left Side (Welcome Text & Subtitle) */}
                <div className={`max-w-md ${isScrolled ? 'text-left' : 'text-center'}`}>
                    <h1 className={`text-5xl font-bold text-gray-100 mb-2 ${isScrolled ? 'hidden' : ''}`}>
                        Welcome to My Development Portfolio
                    </h1>
                    <h2 className={`text-xl font-semibold text-gray-200 ${isScrolled ? 'text-sm' : ''}`}>
                        TobeChukwu / Backend Developer.
                    </h2>
                </div>

                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="Profile"
                    className={`rounded-full  ${isScrolled ? 'profile-image-small' : 'profile-image-large'}`}
                />

                {/* Right Side (Work With Me Button) */}
                <a href="#contact">
                    <button className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors ${isScrolled ? 'py-2 px-4 text-sm' : 'mt-6'}`}>
                        {isScrolled ? 'Work with me' : 'scroll down'}
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Hero;