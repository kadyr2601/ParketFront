'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PreImage from '@/public/Component1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoBanner = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // Tracks if the video is playing
    const videoRef = useRef(null); // Reference to the video element

    useEffect(() => {
        const checkScreenWidth = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
        };
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Start playing the video
            setIsPlaying(true); // Update state to show video is playing
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container videoBanner">
            <h1 data-aos="fade-down">mastery in action</h1>

            {!isPlaying && (
                <div className="video-icon" data-aos="fade-up" onClick={handlePlay}>
                    <Image alt="pre-image" src={PreImage} fill={true} />
                </div>
            )}

            <video
                ref={videoRef}
                width="100%"
                height={isMobile ? 300 : 600}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                loop
                controls
                style={{ display: isPlaying ? 'block' : 'none', borderRadius: '10px' }}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBanner;
