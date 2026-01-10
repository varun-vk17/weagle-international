'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation component
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
);

export default function AboutPage() {
    return (
        <>
            {/* Navigation */}
            <header className="navbar">
                <div className="container navbar-content">
                    <Link href="/" className="logo" aria-label="Weagle International Home">
                        <img src="/logo.svg" alt="Weagle Logo" className="logo-icon" />
                        <span>WEAGLE INTERNATIONAL</span>
                    </Link>
                    <div className="nav-right">
                        <nav className="nav-links">
                            <Link href="/about">About Us</Link>
                            <Link href="/products">Our Products</Link>
                        </nav>
                        <a href="/#contact" className="btn btn-primary btn-nav" aria-label="Request Sample and Pricing">
                            Request Sample & Pricing
                            <span className="arrow-icon">→</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="about-page">
                {/* Section 1: About Intro */}
                <section className="about-intro-section">
                    <div className="container about-intro-container">
                        <FadeIn>
                            <h1 className="about-headline">About Weagle International</h1>
                            <p className="about-subheadline">
                                A responsible export company built for long-term partnerships.
                            </p>
                            <div className="about-intro-body">
                                <p>
                                    Weagle International is an Indian spice export company serving importers across the USA, UK, EU, Nigeria, and Ghana.
                                </p>
                                <p>
                                    We focus on building dependable export relationships with businesses that value consistency, accountability, and clear communication.
                                </p>
                                <p>
                                    Our work is guided by responsibility — not short-term wins.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="about-intro-image">
                                <Image
                                    src="/export-partner-bg-v2.png"
                                    alt="Weagle International warehouse and operations"
                                    width={1200}
                                    height={600}
                                    className="about-hero-img"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Section 2: Our Approach */}
                <section className="about-approach-section">
                    <div className="container about-approach-container">
                        <FadeIn>
                            <h2 className="about-section-title">Our Approach to Export Partnerships</h2>
                            <div className="about-approach-content">
                                <p className="about-lead-text">
                                    We believe exporting is not just about supplying products — it is about ownership.
                                </p>
                                <div className="about-body-text">
                                    <p>
                                        Every client relationship is treated as a long-term partnership.
                                        That means setting clear expectations, communicating early, and standing behind every shipment.
                                    </p>
                                    <p>
                                        We commit only to what we can execute consistently.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Section 3: Our Standards */}
                <section className="about-standards-section">
                    <div className="container about-standards-container">
                        <FadeIn>
                            <h2 className="about-section-title">How We Operate as an Export Partner</h2>
                            <div className="about-standards-content">
                                <p className="about-lead-text">
                                    We operate with internal standards that prioritize clarity, responsibility, and follow-through.
                                </p>
                                <div className="about-body-text">
                                    <p>
                                        When challenges arise, they are addressed early and transparently.
                                        Our clients know where things stand — without chasing updates or managing uncertainty.
                                    </p>
                                    <p>
                                        This mindset defines how we work.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Section 4: Long-Term View */}
                <section className="about-longterm-section">
                    <div className="container about-longterm-container">
                        <FadeIn>
                            <h2 className="about-section-title">Built for Long-Term Trade</h2>
                            <div className="about-longterm-content">
                                <p className="about-body-text">
                                    Weagle International is structured for repeat business and sustainable growth.
                                </p>
                                <p className="about-body-text">
                                    Our goal is to be an export partner our clients can rely on year after year — without surprises, without friction, and without constant oversight.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Section 5: Simple CTA */}
                <section className="about-cta-section">
                    <div className="container about-cta-container">
                        <FadeIn>
                            <h2 className="about-cta-headline">Interested in Working With Us?</h2>
                            <p className="about-cta-text">
                                If you are evaluating a long-term Indian spice export partner, start with a conversation.
                            </p>
                            <div className="about-cta-buttons">
                                <a href="/#contact" className="btn btn-primary btn-lg" aria-label="Request Sample and Pricing">
                                    Request Sample & Pricing
                                    <span className="arrow-icon">→</span>
                                </a>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-lg"
                                    aria-label="Chat on WhatsApp"
                                >
                                    Chat on WhatsApp
                                    <span className="whatsapp-icon">💬</span>
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="container footer-content">
                        <div className="footer-main">
                            <div className="footer-brand">
                                <img src="/logo.svg" alt="Weagle Logo" className="logo-icon-footer" />
                                <span className="footer-brand-name">WEAGLE INTERNATIONAL</span>
                            </div>
                            <p className="footer-tagline">
                                Your trusted partner for premium Indian spices
                            </p>
                        </div>
                        <div className="footer-links">
                            <div className="footer-column">
                                <h4>Company</h4>
                                <Link href="/about">About Us</Link>
                                <Link href="/products">Our Products</Link>
                            </div>
                            <div className="footer-column">
                                <h4>Contact</h4>
                                <a href="mailto:contact@weagleinternational.com" aria-label="Email Weagle International">
                                    contact@weagleinternational.com
                                </a>
                                <a href="tel:+919876543210" aria-label="Call Weagle International">
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 Weagle International. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </>
    );
}
