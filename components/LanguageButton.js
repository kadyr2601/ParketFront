'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageButton() {
    const pathname = usePathname();
    const router = useRouter();

    const getLocalizedPath = (lang) => {
        const path = pathname.replace(/^\/(en|ru)/, `/${lang}`);
        return path.startsWith('/') ? path : `/${path}`;
    };

    const navigateToLocalizedPath = (lang) => {
        const localizedPath = getLocalizedPath(lang);
        router.push(localizedPath);
    };

    const getActiveClass = (lang) => {
        const currentLang = pathname.match(/^\/(en|ru)/)?.[1];
        return currentLang === lang ? 'active' : '';
    };

    return (
        <div className={'langButton'}>
            <div
                className={`l-btn ${getActiveClass('en')}`}
                onClick={() => navigateToLocalizedPath('en')}
            >
                EN
            </div>
            <div
                className={`l-btn ${getActiveClass('ru')}`}
                onClick={() => navigateToLocalizedPath('ru')}
            >
                РУ
            </div>
        </div>
    );
}
