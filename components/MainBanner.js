'use client';
import React, {useEffect} from 'react';
import Image from "next/image";
import MainBannerLogo from "@/public/MainBanner.png";
import Logo from "@/public/Logo.png";
import Down from "@/public/Down.png";
import Instagram from "@/public/Instagram.png";
import Facebook from "@/public/Facebook.png";
import Whatsapp from "@/public/Whatsapp.png";
import TikTok from "@/public/TikTok.png";
import LanguageButton from "@/components/LanguageButton";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainBanner() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const scrollToSection = () => {
        const targetSection = document.getElementById("target-section");
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={"mainBanner"}>
            <div className="layer">
                <LanguageButton/>
                <div className={"logo"} data-aos="zoom-in">
                    <Image alt={"main-banner"} src={Logo} fill={true}/>
                </div>
                <div className={"down"}>
                    <div className={'left'} data-aos="zoom-in-right" onClick={scrollToSection}>
                        <div className="icon">
                            <Image alt={"main-banner"} src={Down} fill={true}/>
                        </div>
                        <p>Learn More</p>
                    </div>
                    <div className="right" data-aos="zoom-out-down">
                        <div className="icon hover:animate-bounce">
                            <Image alt={"main-banner"} src={Instagram} fill={true}/>
                        </div>
                        <div className="icon hover:animate-bounce">
                            <Image alt={"main-banner"} src={Facebook} fill={true}/>
                        </div>
                        <div className="icon hover:animate-bounce">
                            <Image alt={"main-banner"} src={TikTok} fill={true}/>
                        </div>
                        <div className="icon hover:animate-bounce">
                            <Image alt={"main-banner"} src={Whatsapp} fill={true}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-image">
                <Image alt={"main-banner"} src={MainBannerLogo} fill={true}/>
            </div>
        </div>
    );
};
