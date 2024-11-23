'use client';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import p1 from '@/public/p1.png'
import p2 from '@/public/p2.png'
import p3 from '@/public/p3.png'
import p4 from '@/public/p4.png'
import p5 from '@/public/p5.png'


const Partners = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={'partners'}>
            <div className="section container flex flex-col">
                <h1 data-aos="zoom-in-down">they trust us</h1>

                <div className="p-list" data-aos="zoom-in-up">
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p1} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p2} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p3} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p4} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p5} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p4} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p3} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p2} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p1} fill={true}/>
                    </div>
                    <div className={'icon'}>
                        <Image alt={'partner'} src={p5} fill={true}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Partners;