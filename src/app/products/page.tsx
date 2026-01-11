'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FadeIn, StaggerContainer } from '@/components/animations';

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// Note: metadata export is not supported in client components
// SEO is handled through the main layout and dynamic meta tags can be added via next/head if needed


export default function ProductsPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFormExpanded, setIsFormExpanded] = useState(false);
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
            {/* Navigation Bar */}
            <header className="navbar">
                <div className="container navbar-content">
                    <a href="/" className="logo" aria-label="Weagle International Home">
                        <img src="/logo.png" alt="Weagle International Logo" width="60" height="60" className="logo-icon" />
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
                                <img src="/logo.png" alt="Weagle International - Premium Indian Spice Exporter" width="60" height="60" className="logo-icon" />
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
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="products-page">
                {/* Section 1: Intro */}
                {/* Section 1: Intro */}
                <section className="products-hero-section">
                    <div className="products-hero-overlay">
                        <div className="container products-hero-container">
                            <FadeIn>
                                <h1 className="products-page-headline">Our Export Product Range</h1>
                                <p className="products-page-subline">
                                    We supply a complete range of spices and seasonings for global markets, produced under controlled standards and customized for importer requirements.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Section 2: Product Categories */}

                {/* Category 1: Pure Spices */}
                <section className="product-category-section">
                    <div className="container product-category-container">
                        <div className="category-content-grid">
                            <div className="category-left">
                                <FadeIn>
                                    <div className="category-text-block">
                                        <h2 className="category-main-title">Pure Spices</h2>
                                        <p className="category-description">
                                            Single-ingredient spices sourced directly from Indian farms, processed and tested to meet international quality and compliance standards.
                                        </p>
                                    </div>
                                </FadeIn>

                                <StaggerContainer>
                                    <div className="product-list-grid">
                                        {[
                                            'Turmeric Powder',
                                            'Coriander Powder',
                                            'Red Chilli Powder',
                                            'Kashmiri Red Chilli Powder',
                                            'Garlic Powder',
                                            'Red Onion Powder',
                                            'Cumin Powder',
                                            'Dry Ginger Powder',
                                            'Dry Mango Powder',
                                            'Black Pepper Powder',
                                            'White Pepper Powder',
                                            'Black Pepper Powder – Compounded',
                                            'White Pepper Powder – Compounded'
                                        ].map((product, index) => (
                                            <motion.div key={index} className="product-list-item" variants={staggerItem}>
                                                {product}
                                            </motion.div>
                                        ))}
                                    </div>
                                </StaggerContainer>
                            </div>

                            <FadeIn delay={0.3}>
                                <div className="category-visual-right">
                                    <Image src="/pure-spices-display.png" alt="Export Quality Pure Spices (Turmeric, Chilli, Coriander)" width={500} height={400} className="category-image" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Category 2: Blended Spices & Masalas */}
                <section className="product-category-section">
                    <div className="container product-category-container">
                        <FadeIn>
                            <div className="category-text-block">
                                <h2 className="category-main-title">Blended Spices & Masalas</h2>
                                <p className="category-description">
                                    Traditional and custom spice blends prepared under defined formulations to ensure batch consistency and export reliability.
                                </p>
                            </div>
                        </FadeIn>

                        <StaggerContainer>
                            <div className="masala-groups-with-images">
                                {/* Classic & Kitchen Masalas */}
                                <div className="masala-group-row">
                                    <div className="masala-group-content">
                                        <h3 className="masala-group-title">Classic & Kitchen Masalas</h3>
                                        <div className="product-list-grid">
                                            {[
                                                'Curry Powder',
                                                'Kitchen King Masala',
                                                'Garam Masala',
                                                'Garam Masala – No Onion No Garlic'
                                            ].map((product, index) => (
                                                <motion.div key={index} className="product-list-item" variants={staggerItem}>
                                                    {product}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <FadeIn delay={0.2}>
                                        <div className="masala-group-image">
                                            <Image src="/classic-masalas.png" alt="Bulk Classic Kitchen Masalas (Curry Powder, Garam Masala)" width={400} height={300} className="category-image" />
                                        </div>
                                    </FadeIn>
                                </div>

                                {/* Chicken, Meat & Regional Masalas */}
                                <div className="masala-group-row">
                                    <div className="masala-group-content">
                                        <h3 className="masala-group-title">Chicken, Meat & Regional Masalas</h3>
                                        <div className="product-list-grid">
                                            {[
                                                'Chicken Masala',
                                                'Chicken Masala – Classic',
                                                'Butter Chicken Masala',
                                                'Meat Masala',
                                                'Mutton Masala',
                                                'Kadai Veg Masala',
                                                'Kadai Chicken Masala'
                                            ].map((product, index) => (
                                                <motion.div key={index} className="product-list-item" variants={staggerItem}>
                                                    {product}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <FadeIn delay={0.3}>
                                        <div className="masala-group-image">
                                            <Image src="/meat-masalas.png" alt="Export Quality Chicken and Meat Masalas" width={400} height={300} className="category-image" />
                                        </div>
                                    </FadeIn>
                                </div>

                                {/* Specialty & Export Blends */}
                                <div className="masala-group-row">
                                    <div className="masala-group-content">
                                        <h3 className="masala-group-title">Specialty & Export Blends</h3>
                                        <div className="product-list-grid">
                                            {[
                                                'Chaat Masala',
                                                'Channa Masala',
                                                'Biryani Masala',
                                                'Fish & Prawn Biryani Masala',
                                                'Tandoori Masala – Classic',
                                                'Tandoori Masala – Tikka / Kabab',
                                                'Chilli 65 Masala (Veg / Non-Veg)',
                                                'Pepper Masala (Veg / Non-Veg)'
                                            ].map((product, index) => (
                                                <motion.div key={index} className="product-list-item" variants={staggerItem}>
                                                    {product}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <FadeIn delay={0.4}>
                                        <div className="masala-group-image">
                                            <Image src="/specialty-masalas.png" alt="Specialty Export Blends (Chaat Masala, Biryani Masala)" width={400} height={300} className="category-image" />
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </StaggerContainer>
                    </div>
                </section>

                {/* Category 3: Seasonings & Pastes */}
                <section className="product-category-section">
                    <div className="container product-category-container">
                        <div className="category-content-grid">
                            <div className="category-left">
                                <FadeIn>
                                    <div className="category-text-block">
                                        <h2 className="category-main-title">Seasonings & Pastes</h2>
                                        <p className="category-description">
                                            Export-ready seasonings and pastes developed for international foodservice, QSR, and private-label brands.
                                        </p>
                                    </div>
                                </FadeIn>

                                <StaggerContainer>
                                    <div className="product-list-grid">
                                        {[
                                            'Ginger Garlic Paste',
                                            'Mixed Herbs Seasoning',
                                            'Noodles Masala Seasoning',
                                            'Pizza & Garlic Bread Seasoning',
                                            'Taco Seasoning',
                                            'Peri Peri Seasoning Mix – Hot',
                                            'Peri Peri Seasoning Mix – Mild',
                                            'Pasta Seasoning – Curry Flavour',
                                            'Mexican Popcorn Cheese Seasoning'
                                        ].map((product, index) => (
                                            <motion.div key={index} className="product-list-item" variants={staggerItem}>
                                                {product}
                                            </motion.div>
                                        ))}
                                    </div>
                                </StaggerContainer>
                            </div>

                            <FadeIn delay={0.3}>
                                <div className="category-visual-right">
                                    <Image src="/seasonings-pastes-display.png" alt="Bulk Seasonings and Pastes for Foodservice Export" width={500} height={400} className="category-image" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Section 3: Customization & Private Label CTA */}
                <section className="products-cta-section">
                    <div className="container products-cta-container">
                        <FadeIn>
                            <div className="products-cta-content">
                                <h2 className="products-cta-headline">Custom Blends & Private Label Available</h2>
                                <p className="products-cta-text">
                                    We regularly develop custom formulations, packaging, and export documentation based on market requirements. Share your specifications and we'll guide you through sampling, testing, and export readiness.
                                </p>
                                <div className="products-cta-buttons">
                                    <button
                                        onClick={() => setIsFormExpanded(true)}
                                        className="btn-primary-products"
                                        style={{ cursor: 'pointer' }}
                                        aria-label="Request sample and pricing"
                                    >
                                        Request Sample & Pricing
                                    </button>
                                    <a href="https://wa.me/917200550188?text=Hi%2C%20I%27m%20interested%20in%20your%20spice%20products.%20Can%20you%20please%20provide%20more%20information%3F" target="_blank" rel="noopener noreferrer" className="products-whatsapp-link" aria-label="Chat on WhatsApp for quick questions">
                                        Chat on WhatsApp for Quick Questions →
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Expandable Form Modal */}
                {isFormExpanded && (
                    <div className="expandable-modal-overlay" onClick={() => setIsFormExpanded(false)} role="dialog" aria-modal="true" aria-labelledby="products-modal-headline">
                        <div className="expandable-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="modal-close-btn"
                                onClick={() => setIsFormExpanded(false)}
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            <div className="modal-form-wrapper">
                                <h2 id="products-modal-headline" className="modal-headline">Request Sample & Pricing</h2>
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
                                            <label htmlFor="products-modal-name">Full Name *</label>
                                            <input type="text" id="products-modal-name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="products-modal-company">Company Name *</label>
                                            <input type="text" id="products-modal-company" name="company" required />
                                        </div>
                                    </div>

                                    <div className="modal-form-row">
                                        <div className="form-group">
                                            <label htmlFor="products-modal-email">Email Address *</label>
                                            <input type="email" id="products-modal-email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="products-modal-phone">Phone Number</label>
                                            <input type="tel" id="products-modal-phone" name="phone" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="products-modal-product">Product Interest *</label>
                                        <select id="products-modal-product" name="product" required>
                                            <option value="">Select a category</option>
                                            <option value="blended">Blended Spices</option>
                                            <option value="pure">Pure Spice Powders</option>
                                            <option value="seasonings">Seasonings</option>
                                            <option value="custom">Custom Requirements</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="products-modal-volume">Expected Monthly Volume</label>
                                        <input type="text" id="products-modal-volume" name="volume" placeholder="e.g., 500 kg" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="products-modal-message">Additional Requirements</label>
                                        <textarea id="products-modal-message" name="message" rows={4} placeholder="Describe your specific needs, certifications required, or any questions..."></textarea>
                                    </div>

                                    <button type="submit" className="form-submit-btn" aria-label="Submit enquiry form" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
