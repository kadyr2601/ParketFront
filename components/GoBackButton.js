'use client';

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        if (window.history.length > 2) {
            router.back();
        } else {
            router.push('/'); // Fallback to home or another page
        }
    };

    return (
        <div onClick={handleGoBack}
            className="flex items-center cursor-pointer transition"
        >
            <span className="mr-2" style={{color:"#F6F2E9"}}>&larr;</span>
            <span style={{color:"#F6F2E9", fontWeight: '400'}}>Go Back</span>
        </div>
    );
};

export default GoBackButton;
