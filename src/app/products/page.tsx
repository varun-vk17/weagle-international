'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer } from '@/components/animations';

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// Note: metadata export is not supported in client components
// SEO is handled through the main layout and dynamic meta tags can be added via next/head if needed


export default function ProductsPage() {
    return (
        <>
            {/* Navigation Bar */}
            <header className="navbar">
                <div className="container navbar-content">
                    <a href="/" className="logo" aria-label="Weagle International Home">
                        <img src="/weagle-logo.svg" alt="Weagle International Logo" width="32" height="32" className="logo-icon" />
                        WEAGLE INTERNATIONAL
                    </a>
                    <div className="nav-right">
                        <nav className="nav-links">
                            <Link href="/products">Our Products</Link>
                        </nav>
                        <a href="/#contact" className="btn btn-primary btn-nav">
                            Request Sample & Pricing
                            <span className="arrow-icon">→</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="products-page">
                {/* Section 1: Intro */}
                <section className="products-intro-section">
                    <div className="container products-intro-container">
                        <FadeIn>
                            <h1 className="products-page-headline">Our Export Product Range</h1>
                            <p className="products-page-subline">
                                We supply a complete range of spices and seasonings for global markets, produced under controlled standards and customized for importer requirements.
                            </p>
                        </FadeIn>
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
                                    <Image src="/pure-spices-display.png" alt="Pure Spices Display - Export Quality" width={500} height={400} className="category-image" />
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
                                            <Image src="/classic-masalas.png" alt="Classic and Kitchen Masalas" width={400} height={300} className="category-image" />
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
                                            <Image src="/meat-masalas.png" alt="Chicken and Meat Masalas" width={400} height={300} className="category-image" />
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
                                            <Image src="/specialty-masalas.png" alt="Specialty and Export Blends" width={400} height={300} className="category-image" />
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
                                    <Image src="/seasonings-pastes-display.png" alt="Seasonings and Pastes Display - Export Quality" width={500} height={400} className="category-image" />
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
                                    <button className="btn-primary-products" aria-label="Request sample and pricing">Request Sample & Pricing</button>
                                    <a href="https://wa.me/919876543210" className="products-whatsapp-link" aria-label="Chat on WhatsApp for quick questions">
                                        Chat on WhatsApp for Quick Questions →
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
        </>
    );
}
