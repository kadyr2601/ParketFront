'use client';
import React, {useEffect} from 'react';
import Image from "next/image";
import mapImage from '@/public/map.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={'about-us'}>
            <div className="layer container">
                <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">About us</h1>
                <h3 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                    We have been professionally renovating and laying parquet since 2007, with projects in Moscow, all over Russia and now in Dubai. During this time we have established ourselves on prestigious projects - from luxury hotels and restaurants to modern business centers and private interiors.
                    <br/>
                    <br/>
                    Our approach is based on a well-organized system where every step is thought through to the last detail. We ensure flawless execution of all works, adhering to strict deadlines and quality standards. Organization and attention to detail are the key principles that help us achieve outstanding results and earn the trust of our clients.
                </h3>
            </div>
            <Image alt={'map'} src={mapImage} fill={true} style={{objectFit: "contain"}}/>
        </div>
    );
};

export default AboutUs;