'use client'
import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import s1 from '@/public/S1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef([]);

    const tabs = [
        'SANDING OF PARQUET',
        'FLOORING & RENEWAL',
        'INSTALLATION',
        'PRODUCTION',
        'LOCAL RESTORATION',
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="pt-28 pb-28 flex flex-col w-full gap-5 services-section container" id={"target-section"}>
            <h1 style={{ textAlign: 'center' }} data-aos="fade-left">Parquet services</h1>

            <div className="flex flex-col gap-3 w-full">
                <div className="tabs" data-aos="fade-right">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                            ref={(el) => (tabsRef.current[index] = el)}
                            onClick={() => handleTabClick(index)}
                            style={{
                                color: activeTab === index ? '#e74c3c' : '#ffffff',
                                fontWeight: '700',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            {tab}
                        </div>
                    ))}

                    <div
                        className="indicator-active"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: '3px',
                            backgroundColor: '#e74c3c',
                            transition: 'all 0.3s ease',
                            left: tabsRef.current[activeTab]?.offsetLeft || 0,
                            width: tabsRef.current[activeTab]?.offsetWidth || 0,
                            zIndex: 1, // Ensure it is above the background line
                        }}
                    />
                    <div
                        className="background-line"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: '3px',
                            width: '100%', // Full width of the tabs container
                            backgroundColor: '#F6F2E9', // Background line color
                            zIndex: 0, // Ensure it is below the indicators
                        }}
                    />
                </div>

                <div className={"flex flex-row w-full gap-5 pt-5"} data-aos="fade-up">
                    <div className="relative w-1/2" style={{height: '492px'}}>
                        <Image alt={'img'} src={s1} className={'rounded'} fill={true} style={{objectFit:"cover"}}/>
                    </div>
                   <div className={"flex flex-col w-1/2 justify-center gap-5"}>
                       <h2>PARQUET SANDING AND STAINING</h2>
                       <p>Professional parquet floor sanding to restore smoothness and shine. The process eliminates uneven surfaces, old coatings, and minor imperfections, bringing the floor back to its original appearance. Staining allows for a color transformation, enhancing the uniqueness of the interior and giving the floor a new character. A variety of shades offers options for creating either a classic or modern style, seamlessly complementing the overall design.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
