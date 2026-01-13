"use client";

import Image from "next/image";
import { Eye, Target, Menu, X } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GoogleTranslate from "@/components/GoogleTranslate";

export default function AboutUs() {
    const [isFormExpanded, setIsFormExpanded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitError('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            product: formData.get('product'),
            volume: formData.get('volume'),
            message: formData.get('message'),
            formType,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
                e.currentTarget.reset();
                setTimeout(() => {
                    setIsFormExpanded(false);
                    setSubmitMessage('');
                }, 3000);
            } else {
                setSubmitError('Failed to send message. Please try again or contact us directly.');
            }
        } catch (error) {
            setSubmitError('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Header / Navigation */}
            <header className="navbar">
                <div className="container navbar-content">
                    <a href="/" className="logo" aria-label="Weagle International Home">
                        <img src="/logo.png" alt="Weagle International - Premium Indian Spice Exporter" width="60" height="60" className="logo-icon" />
                        <div className="logo-text">
                            <span className="logo-name">WEAGLE INTERNATIONAL</span>
                            <span className="logo-slogan">Quality is our Identity</span>
                        </div>
                    </a>
                    <div className="nav-right">
                        <nav className="nav-links desktop-only">
                            <Link href="/products">Our Products</Link>
                            <Link href="/about">About Us</Link>
                        </nav>
                        <GoogleTranslate />
                        <button
                            onClick={() => setIsFormExpanded(true)}
                            className="btn btn-primary btn-nav desktop-only"
                            style={{ cursor: 'pointer' }}
                            aria-label="Open request sample and pricing form"
                        >
                            Request Sample & Pricing
                            <span className="arrow-icon">→</span>
                        </button>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open mobile menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="mobile-menu-header">
                            <a href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
                                <img src="/logo.png" alt="Weagle International Logo" width="60" height="60" className="logo-icon" />
                                <div className="logo-text">
                                    <span className="logo-name">WEAGLE</span>
                                    <span className="logo-slogan">Quality is our Identity</span>
                                </div>
                            </a>
                            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="mobile-nav-links">
                            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>Our Products</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                            <button onClick={() => { setIsMobileMenuOpen(false); setIsFormExpanded(true); }}>
                                Request Sample & Pricing
                            </button>
                            <div className="mobile-translate-wrapper">
                                <GoogleTranslate />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expandable Form Modal */}
            {isFormExpanded && (
                <div className="expandable-modal-overlay" onClick={() => setIsFormExpanded(false)} role="dialog" aria-modal="true" aria-labelledby="about-modal-headline">
                    <div className="expandable-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close-btn"
                            onClick={() => setIsFormExpanded(false)}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="modal-form-wrapper">
                            <h2 id="about-modal-headline" className="modal-headline">Request Sample & Pricing</h2>
                            <p className="modal-subline">Submit your requirements and receive a detailed quote within 24 hours.</p>

                            {submitMessage && (
                                <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#10B981', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
                                    {submitMessage}
                                </div>
                            )}

                            {submitError && (
                                <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#EF4444', color: 'white', borderRadius: '8px', textAlign: 'center' }}>
                                    {submitError}
                                </div>
                            )}

                            <form className="modal-enquiry-form" aria-label="Sample and pricing request form" onSubmit={(e) => handleFormSubmit(e, 'sample')}>
                                <div className="modal-form-row">
                                    <div className="form-group">
                                        <label htmlFor="about-modal-name">Full Name *</label>
                                        <input type="text" id="about-modal-name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="about-modal-company">Company Name *</label>
                                        <input type="text" id="about-modal-company" name="company" required />
                                    </div>
                                </div>

                                <div className="modal-form-row">
                                    <div className="form-group">
                                        <label htmlFor="about-modal-email">Email Address *</label>
                                        <input type="email" id="about-modal-email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="about-modal-phone">Phone Number</label>
                                        <input type="tel" id="about-modal-phone" name="phone" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="about-modal-product">Product Interest *</label>
                                    <select id="about-modal-product" name="product" required>
                                        <option value="">Select a category</option>
                                        <option value="blended">Blended Spices</option>
                                        <option value="pure">Pure Spice Powders</option>
                                        <option value="seasonings">International Herbs and Seasonings</option>
                                        <option value="custom">Custom Requirements</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="about-modal-volume">Expected Monthly Volume</label>
                                    <input type="text" id="about-modal-volume" name="volume" placeholder="e.g., 500 kg" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="about-modal-message">Additional Requirements</label>
                                    <textarea id="about-modal-message" name="message" rows={4} placeholder="Describe your specific needs, certifications required, or any questions..."></textarea>
                                </div>

                                <button type="submit" className="form-submit-btn" aria-label="Submit enquiry form" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <main>
                {/* Hero / Intro Section */}
                <section className="about-hero-section">
                    <div className="about-hero-overlay">
                        <div className="container about-hero-container">
                            <FadeIn>
                                <div className="about-hero-content">
                                    <h1 className="about-page-title">About Us</h1>
                                    <p className="about-intro-text">
                                        Weagle International was founded in 2019 with the clear vision of restoring the intrinsic value of authentic Indian spices and the unique flavors they offer globally.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* About Us Content Section */}
                <section className="about-content-section">
                    <div className="container about-content-container">
                        <FadeIn>
                            <div className="about-content-block">
                                <h2 className="section-label">Our Story</h2>
                                <p className="about-paragraph">
                                    Weagle International was founded in 2019 with the clear vision of restoring the intrinsic value of authentic Indian spices and the unique flavors they offer globally. What began as a focused local trading business has rapidly grown into a trusted global supplier and exporter of premium Indian spices, essential for culinary traditions worldwide. Our operations are guided by a relentless passion for quality, leading us to secure key certifications like FSSAI and global export excellence. In 2023, a significant investment in state-of-the-art processing facilities marked a major milestone, propelling our growth and ensuring superior quality control. This transformation established us as a streamlined, ethical, and high-quality trade partner. With over five years of robust experience, Weagle International confidently looks to the future, ready to continue sharing the true, rich essence of India and delighting palates across all continents.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="vision-mission-section">
                    <div className="container vision-mission-container">
                        <StaggerContainer className="vision-mission-grid">
                            {/* Vision */}
                            <motion.div className="vision-mission-card" variants={staggerItem}>
                                <div className="vm-icon-wrapper">
                                    <Eye className="vm-icon" size={32} strokeWidth={1.5} />
                                </div>
                                <h2 className="vm-title">Our Vision</h2>
                                <p className="vm-text">
                                    To be the globally recognized benchmark for delivering the purest, most authentic, and innovative spice products that enrich culinary experiences worldwide. To be the most trusted name in the spice industry, known for our unwavering commitment to quality, purity, and sustainable practices from farm to table. To connect the world through the vibrant flavors of high-quality pure and blended spices, preserving their traditional essence while leading innovation in the global spice market.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div className="vision-mission-card" variants={staggerItem}>
                                <div className="vm-icon-wrapper">
                                    <Target className="vm-icon" size={32} strokeWidth={1.5} />
                                </div>
                                <h2 className="vm-title">Our Mission</h2>
                                <p className="vm-text">
                                    Weagle International is dedicated to manufacturing, supplying, and exporting a diverse range of premium pure and blended spices. We achieve this by upholding rigorous quality standards, leveraging our global market expertise, and fostering reliable, long-term relationships with our international customers. Our mission is to consistently source, manufacture, and deliver the highest quality pure and blended spices to global markets, ensuring exceptional flavor, purity, and value, thereby empowering our customers to create outstanding culinary products and experiences.
                                </p>
                            </motion.div>
                        </StaggerContainer>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="team-section">
                    <div className="container team-container">
                        <FadeIn>
                            <h2 className="team-title">Our Team</h2>
                            <p className="team-text">
                                Right from the Management level to the skilled R&D expert, the Group makes sure that every single person at Weagle International is well-aware of the predetermined quality policies and makes an attempt to be better each day. The factory workers and other helping staff also have become a part of the process of growing together with sheer dedication towards work. The company stands as a pioneer in the spice industry of India as far as 100% customer satisfaction is concerned.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Brand Statement Section */}
                <section className="brand-statement-section">
                    <div className="container brand-statement-container">
                        <FadeIn>
                            <div className="brand-logo-wrapper">
                                <img src="/logo.png" alt="Weagle International Logo" className="brand-logo" />
                            </div>
                            <p className="brand-statement-text">Quality is our Identity</p>
                        </FadeIn>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/logo.png" alt="Weagle International Logo" width="120" height="120" className="logo-icon-footer" />
                                WEAGLE
                            </div>
                            <p className="footer-tagline">International Spice Exports</p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h3 className="footer-heading">Company</h3>
                                <ul className="footer-list">
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><a href="#" onClick={(e) => { e.preventDefault(); setIsFormExpanded(true); }}>Contact</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3 className="footer-heading">Products</h3>
                                <ul className="footer-list">
                                    <li><Link href="/products">Blended Spices</Link></li>
                                    <li><Link href="/products">Pure Powders</Link></li>
                                    <li><Link href="/products">International Herbs and Seasonings</Link></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h3 className="footer-heading">Contact</h3>
                                <ul className="footer-list">
                                    <li>📧 <a href="mailto:info@weagleinternational.com" aria-label="Email Weagle International">info@weagleinternational.com</a></li>
                                    <li>📞 <a href="tel:+917200550188" aria-label="Call Weagle International">+91 7200550188</a></li>
                                    <li>India</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 Weagle International. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
