'use client';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import g1 from '@/public/g1.png';
import g2 from '@/public/g2.png';
import g3 from '@/public/g3.png';
import g4 from '@/public/g4.png';
import g5 from '@/public/g5.png';
import g6 from '@/public/g6.png';
import g7 from '@/public/g7.png';
import g8 from '@/public/g8.png';
import g9 from '@/public/g9.png';
import g10 from '@/public/g10.png';
import g11 from '@/public/g11.png';
import g12 from '@/public/g12.png';
import g13 from '@/public/g13.png';
import g14 from '@/public/g14.png';
import GoBackButton from "@/components/GoBackButton";


const Page = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const gallery = [
        g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14,
    ];

    return (
        <div className={'gallery container'}>
            <GoBackButton/>
            <h1>Gallery</h1>

            <div className="section">
                {gallery.map((image, index) => (
                    <div key={index} className="image" data-aos="zoom-in">
                        <Image src={image} alt={`Gallery Image ${index + 1}`} fill={true}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;