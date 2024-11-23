import React from 'react';
import Image from "next/image";
import Logo from "@/public/Logo.png";
import Instagram from "@/public/Instagram.png";
import Facebook from "@/public/Facebook.png";
import Whatsapp from "@/public/Whatsapp.png";
import TikTok from "@/public/TikTok.png";


const Footer = () => {
    return (
        <div className={"flex flex-col container footer"}>
            <div className={'up'}>
                <div className="logo">
                    <Image alt={'logo'} src={Logo} fill={true}/>
                </div>
                <div className="contact">
                    <div className="column">
                        <p>+971 (56) 506-2277;</p>
                        <p>+971 (56) 506-4241</p>
                    </div>
                    <div className="column">
                        <p>info@fixworks-team.com</p>
                    </div>
                </div>
                <div className="right">
                    <div className="icon">
                        <Image alt={"main-banner"} src={Instagram} fill={true}/>
                    </div>
                    <div className="icon">
                        <Image alt={"main-banner"} src={Facebook} fill={true}/>
                    </div>
                    <div className="icon">
                        <Image alt={"main-banner"} src={TikTok} fill={true}/>
                    </div>
                    <div className="icon">
                        <Image alt={"main-banner"} src={Whatsapp} fill={true}/>
                    </div>
                </div>
            </div>
            <div className="down">
                © 2024 FIXWORKS. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;