"use client";

import { useEffect } from 'react';
import { Languages } from 'lucide-react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

export default function GoogleTranslate({ id = 'google_translate_element' }: { id?: string }) {
    useEffect(() => {
        const initTranslate = () => {
            if (window.google && window.google.translate) {
                // Check if element exists before initializing
                if (document.getElementById(id)) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            includedLanguages: 'en,fr,es,de,ar,pt',
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false,
                        },
                        id
                    );
                }
            }
        };

        // If generic script is already loading/loaded
        if (window.google && window.google.translate) {
            initTranslate();
        } else {
            // Chain callbacks to ensure all instances init
            const originalInit = window.googleTranslateElementInit;
            window.googleTranslateElementInit = () => {
                if (originalInit) originalInit();
                initTranslate();
            };

            if (!document.querySelector('script[src*="translate.google.com"]')) {
                const script = document.createElement('script');
                script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }, [id]);

    return (
        <div className="google-translate-wrapper">
            <div className="translate-icon-wrapper">
                <Languages size={20} />
            </div>
            <div id={id}></div>
        </div>
    );
}
