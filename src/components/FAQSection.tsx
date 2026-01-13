'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/animations'

export default function FAQSection() {
    return (
        <>
            {/* FAQ Section for SEO */}
            <section className="faq-section">
                <div className="container">
                    <FadeIn>
                        <div className="faq-header">
                            <div className="section-badge">FAQ</div>
                            <h2 className="faq-title">Frequently Asked Questions</h2>
                            <p className="faq-subtitle">Everything you need to know about Weagle International</p>
                        </div>
                    </FadeIn>

                    <div className="faq-grid">
                        <FadeIn delay={0.1}>
                            <div className="faq-card">
                                <div className="faq-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="#61245C" />
                                    </svg>
                                </div>
                                <h3 className="faq-question">What is Weagle International?</h3>
                                <p className="faq-answer">
                                    Weagle International is a premium Indian spice exporter and manufacturer established in 2019. Weagle specializes in supplying high-quality blended spices, pure spice powders, and international herbs and seasonings to importers worldwide, including the USA, UK, EU, Nigeria, and Ghana.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="faq-card">
                                <div className="faq-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 11.75C6.66 11.75 4.75 9.84 4.75 7.5C4.75 5.16 6.66 3.25 9 3.25C11.34 3.25 13.25 5.16 13.25 7.5C13.25 9.84 11.34 11.75 9 11.75ZM15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12ZM9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM15 13C14.71 13 14.38 13.02 14.03 13.05C15.19 13.89 16 15.02 16 17V20H23V17C23 14.34 17.67 13 15 13Z" fill="#61245C" />
                                    </svg>
                                </div>
                                <h3 className="faq-question">Why choose Weagle for spice imports?</h3>
                                <p className="faq-answer">
                                    Weagle International offers ISO & FDA compliant spices with complete traceability, transparent pricing, and dedicated export support. With over 5 years of experience, Weagle has become a trusted partner for spice importers seeking premium quality Indian spices with reliable delivery.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="faq-card">
                                <div className="faq-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="#61245C" />
                                    </svg>
                                </div>
                                <h3 className="faq-question">What products does Weagle International export?</h3>
                                <p className="faq-answer">
                                    Weagle exports three main categories: Blended Spices & Masalas (curry powders, garam masala, tandoori masala), Pure Spice Powders (turmeric, red chilli, coriander), and International Herbs and Seasonings (custom blends for foodservice and QSR chains).
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="faq-card">
                                <div className="faq-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#61245C" />
                                    </svg>
                                </div>
                                <h3 className="faq-question">How do I start importing spices from Weagle?</h3>
                                <p className="faq-answer">
                                    Contact Weagle International at info@weagleinternational.com or +91 7200550188 to request samples and pricing. Weagle's export team will provide a detailed quote within 24 hours and guide you through the entire import process.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    )
}
