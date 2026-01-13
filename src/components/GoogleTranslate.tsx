"use client";

import { useEffect } from 'react';
import { Languages } from 'lucide-react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

export default function GoogleTranslate() {
    useEffect(() => {
        // Define the initialization function
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,fr,es,de,ar,pt',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            }
        };

        // Load the Google Translate script
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            const existingScript = document.querySelector('script[src*="translate.google.com"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <div className="google-translate-wrapper">
            <div className="translate-icon-wrapper">
                <Languages size={20} />
            </div>
            <div id="google_translate_element"></div>
        </div>
    );
}
