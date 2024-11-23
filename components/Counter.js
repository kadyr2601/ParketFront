'use client'
import React, { useEffect, useState, useRef } from 'react';

const Counter = () => {
    const counters = [
        { value: 17, suffix: ' Years', description: 'on the restoration market' },
        { value: 2500, suffix: ' +', description: 'successfully completed projects' },
        { value: 50, suffix: '', description: 'employees in the state' },
        { value: 60, suffix: ' +', description: 'active projects in continuous operation' },
        { value: 1500, suffix: ' +', description: 'solved issues per day' },
        { value: 29000, suffix: ' +', description: 'defects repaired per year' },
    ];

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [currentValues, setCurrentValues] = useState(counters.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    useEffect(() => {
        if (visible) {
            const animationDuration = 3000; // Total duration in ms
            const frameRate = 60; // Frames per second
            const totalFrames = Math.round((animationDuration / 1000) * frameRate);

            counters.forEach((counter, index) => {
                const increment = counter.value / totalFrames;

                let currentFrame = 0;
                const interval = setInterval(() => {
                    setCurrentValues((prev) => {
                        const newValues = [...prev];
                        newValues[index] = Math.min(counter.value, prev[index] + increment);
                        return newValues;
                    });
                    currentFrame++;
                    if (currentFrame >= totalFrames) clearInterval(interval);
                }, 1000 / frameRate);
            });
        }
    }, [visible]);

    return (
        <div ref={sectionRef} className="counter-section container">
            {counters.map((counter, index) => (
                <div key={index} className="flex flex-col gap-3.5 justify-center counter">
                    <div className="title">
                        {Math.round(currentValues[index])}
                        {counter.suffix}
                    </div>
                    <h3 className="description">{counter.description}</h3>
                </div>
            ))}
        </div>
    );
};

export default Counter;
