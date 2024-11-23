'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import gal_1 from '@/public/gal-1.png'
import gal_2 from '@/public/gal-2.png'
import gal_3 from '@/public/gal-3.png'
import gal_4 from '@/public/gal-4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {usePathname, useRouter} from 'next/navigation';

const Gallery = () => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const goToCatalog = () => {
        const currentLang = pathname.split('/')[1]; // Extract language from the URL
        const langPrefix = currentLang === 'en' || currentLang === 'ru' ? `/${currentLang}` : '';
        router.push(`${langPrefix}/gallery`); // Navigate with the language prefix
    };

    return (
        <div className={'gallery container flex flex-col gap-5'}>
            <h1 data-aos="fade-up" data-aos-duration="3000">Gallery</h1>
            <div className={'flex flex-row section'}>
                <div data-aos="zoom-in" data-aos-duration="3000" className="icon">
                    <Image alt={'gallery'} src={gal_1} fill={true}/>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" className="icon">
                    <Image alt={'gallery'} src={gal_2} fill={true}/>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" className="icon">
                    <Image alt={'gallery'} src={gal_3} fill={true}/>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" className="icon">
                    <Image alt={'gallery'} src={gal_4} fill={true}/>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={'btn'} onClick={goToCatalog}>
                Full Catalog
            </div>
        </div>
    );
};

export default Gallery;