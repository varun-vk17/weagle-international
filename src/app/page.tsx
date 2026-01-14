"use client";

import Image from "next/image";
import { CheckCircle2, DollarSign, Clock, Eye, MessageCircle, BadgeCheck, FileCheck, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FadeIn, StaggerContainer, staggerItem, ScaleIn, DraggableCarousel } from "@/components/animations";
import GoogleTranslate from "@/components/GoogleTranslate";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const testimonials = [
    {
      quote: "Weagle International delivers consistent quality across every shipment. Their controlled export process and clear communication have made them our most reliable spice supplier.",
      name: "David Olajide",
      title: "Import Director, Nigeria",
      image: "/avatar-david-new.png"
    },
    {
      quote: "From sample approval to final delivery, every step was transparent and on schedule. The batch consistency is exactly what our private label brand needed.",
      name: "Mohamed Fyzal",
      title: "Procurement Manager, UAE",
      image: "/avatar-mohamed-new.png"
    },
    {
      quote: "Working with Weagle has eliminated our supplier risk. Their documentation is complete, quality is verified, and they actually respond when issues arise.",
      name: "Ivan Loginov",
      title: "Supply Chain Director, Bulgaria",
      image: "/avatar-ivan-new.png"
    },
    {
      quote: "Exceptional service and premium quality spices. Weagle International has become our go-to supplier for authentic Indian spices with reliable global shipping.",
      name: "John Dimitrov",
      title: "Food Service Manager, Australia",
      image: "/avatar-john-new.png"
    }
  ];

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
      {!isFormExpanded && (
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
              <div className="desktop-only">
                <GoogleTranslate id="google_translate_desktop" />
              </div>
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
      )}

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
                <GoogleTranslate id="google_translate_mobile" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-grid">

            {/* Left Column: Copy */}
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Social Proof */}
                <div className="social-proof">
                  Trusted by importers across the USA, UK, EU, Nigeria, and Ghana
                </div>

                {/* Headlines */}
                <h1 className="headline">
                  Import Indian Spices<br />With Complete Peace of Mind
                </h1>
                <p className="subheadline">
                  From sourcing to shipment, every order follows a controlled export process designed for
                  consistency, compliance, and on time delivery.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="cta-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => setIsFormExpanded(true)}
                  className="btn btn-primary btn-lg"
                  style={{ cursor: 'pointer' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Request sample and pricing - opens contact form"
                >
                  Request Sample & Pricing <span className="arrow-icon">→</span>
                </motion.button>

                <motion.a
                  href="https://wa.me/917200550188?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20spice%20export%20products.%20Can%20you%20please%20share%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-hero"
                  aria-label="Chat on WhatsApp"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/social.png"
                    alt="Chat on WhatsApp"
                    width={36}
                    height={36}
                    className="whatsapp-icon-img"
                  />
                </motion.a>
              </motion.div>

              {/* Expandable Form Modal */}
              {isFormExpanded && (
                <div className="expandable-modal-overlay" onClick={() => setIsFormExpanded(false)} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                  <div className="expandable-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="modal-close-btn"
                      onClick={() => setIsFormExpanded(false)}
                      aria-label="Close"
                    >
                      ✕
                    </button>

                    <div className="modal-form-wrapper">
                      <h2 id="modal-headline" className="modal-headline">Request Sample & Pricing</h2>
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
                            <label htmlFor="modal-name">Full Name *</label>
                            <input type="text" id="modal-name" name="name" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="modal-company">Company Name *</label>
                            <input type="text" id="modal-company" name="company" required />
                          </div>
                        </div>

                        <div className="modal-form-row">
                          <div className="form-group">
                            <label htmlFor="modal-email">Email Address *</label>
                            <input type="email" id="modal-email" name="email" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="modal-phone">Phone Number</label>
                            <input type="tel" id="modal-phone" name="phone" />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="modal-product">Product Interest *</label>
                          <select id="modal-product" name="product" required>
                            <option value="">Select a category</option>
                            <option value="blended">Blended Spices</option>
                            <option value="pure">Pure Spice Powders</option>
                            <option value="seasonings">International Herbs and Seasonings</option>
                            <option value="custom">Custom Requirements</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="modal-volume">Expected Monthly Volume</label>
                          <input type="text" id="modal-volume" name="volume" placeholder="e.g., 500 kg" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="modal-message">Additional Requirements</label>
                          <textarea id="modal-message" name="message" rows={4} placeholder="Describe your specific needs, certifications required, or any questions..."></textarea>
                        </div>

                        <button type="submit" className="form-submit-btn" aria-label="Submit enquiry form" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="badge">
                  <span className="badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#10B981" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </span>
                  ISO & FDA compliant
                </div>
                <span className="bullet">•</span>
                <div className="badge">
                  <span className="badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </span>
                  Global export experience
                </div>
                <span className="bullet">•</span>
                <div className="badge">
                  <span className="badge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#F59E0B" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Fast response
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="hero-visual">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <Image
                  src="/product_spice.png"
                  alt="Premium Indian spice powder heap by Weagle International - Export Quality"
                  width={600}
                  height={600}
                  className="hero-image"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </section>

        {/* Certification Logos Marquee */}
        <section className="certifications-marquee">
          <FadeIn className="marquee-container">
            <div className="cert-track">
              <div className="marquee-content">
                <Image src="/fssai-logo.jpg" alt="FSSAI Food Safety Certificate ISO for Spice Exports" width={120} height={60} className="cert-logo" loading="lazy" />
                <Image src="/iec-logo.jpg" alt="IEC Import Export Code Certification" width={120} height={60} className="cert-logo" loading="lazy" />
                <Image src="/msme-logo.jpg" alt="MSME Micro Small Medium Enterprise Certification" width={120} height={60} className="cert-logo" loading="lazy" />
                <Image src="/gmp-logo.jpg" alt="GMP Good Manufacturing Practice Certification" width={120} height={60} className="cert-logo" loading="lazy" />
                <Image src="/haccp-logo.jpg" alt="HACCP Hazard Analysis Critical Control Point Certification" width={120} height={60} className="cert-logo" loading="lazy" />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* B2B Positioning Section */}
        <section className="positioning-section">
          <div className="container positioning-container">
            <FadeIn>
              <h2 className="positioning-headline">An Export Partner for Serious Importers</h2>

              <div className="positioning-body">
                <p className="positioning-text">
                  We work with importers who prioritize consistency, compliance, and delivery certainty.
                </p>
                <p className="positioning-text">
                  Our clients include bulk buyers, distributors, and private label brands who cannot afford batch issues, missed timelines, or unclear communication.
                </p>
                <p className="positioning-disqualifier">
                  If price is the only factor you consider, this will not be the right fit.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Reliability Section */}
        <section className="reliability-section">
          <div className="container reliability-container">
            <FadeIn>
              <div className="reliability-header">
                <h2 className="reliability-headline">What You Can Rely On Every Shipment</h2>
                <p className="reliability-intro">
                  When your supply chain is stable, everything else runs smoother.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="reliability-grid">
              {/* Card 1 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                  <BadgeCheck className="reliability-icon" strokeWidth={1.5} style={{ color: '#10B981' }} />
                </div>
                <h3 className="reliability-card-title">Consistent Batch Quality</h3>
                <p className="reliability-card-text">You get consistent batch quality across orders.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <FileCheck className="reliability-icon" strokeWidth={1.5} style={{ color: '#3B82F6' }} />
                </div>
                <h3 className="reliability-card-title">Confirmed Pricing</h3>
                <p className="reliability-card-text">You get pricing confirmed before production begins.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                  <Calendar className="reliability-icon" strokeWidth={1.5} style={{ color: '#F59E0B' }} />
                </div>
                <h3 className="reliability-card-title">Clear Timelines</h3>
                <p className="reliability-card-text">You get clear timelines you can plan around.</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                  <Eye className="reliability-icon" strokeWidth={1.5} style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="reliability-card-title">Full Visibility</h3>
                <p className="reliability-card-text">You get full visibility from sourcing to shipment.</p>
              </motion.div>

              {/* Card 5 - Wide */}
              <motion.div className="reliability-card reliability-card-wide" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper" style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)' }}>
                  <MessageCircle className="reliability-icon" strokeWidth={1.5} style={{ color: '#38BDF8' }} />
                </div>
                <h3 className="reliability-card-title">Reliable Communication</h3>
                <p className="reliability-card-text">You get communication that does not disappear when issues arise.</p>
              </motion.div>
            </StaggerContainer>

            <p className="reliability-closing">
              So you can focus on growing your business instead of managing supplier risk.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container process-container">
            <FadeIn>
              <div className="process-header">
                <h2 className="process-headline">A Controlled Export Process From Start to Finish</h2>
                <p className="process-intro">
                  Every order follows a defined export system designed to protect quality, timelines, and compliance.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="process-layout">
              {/* Left Column */}
              <div className="process-steps-left">
                <motion.div className="process-card" variants={staggerItem}>
                  <div className="step-header">
                    <span className="step-number" style={{ color: '#10B981' }}>01</span>
                  </div>
                  <h3 className="step-title">Specifications and Sample Approval</h3>
                  <p className="step-text">You share your requirements. Samples and lab reports are prepared for approval.</p>
                </motion.div>

                <motion.div className="process-card" variants={staggerItem}>
                  <div className="step-header">
                    <span className="step-number" style={{ color: '#3B82F6' }}>02</span>
                  </div>
                  <h3 className="step-title">Controlled Production and Blending</h3>
                  <p className="step-text">Production moves forward under defined standards with quality checks at every stage.</p>
                </motion.div>
              </div>

              {/* Center Column: Visual */}
              <div className="process-center">
                <Image src="/export_process_center.jpg" alt="Weagle International Spice Export Process & Tracking System" width={500} height={600} className="process-center-img" loading="lazy" />
              </div>

              {/* Right Column */}
              <div className="process-steps-right">
                <motion.div className="process-card" variants={staggerItem}>
                  <div className="step-header">
                    <span className="step-number" style={{ color: '#F59E0B' }}>03</span>
                  </div>
                  <h3 className="step-title">Testing, Packing, and Documentation</h3>
                  <p className="step-text">Each batch is tested, packed, and prepared with complete export documentation.</p>
                </motion.div>

                <motion.div className="process-card" variants={staggerItem}>
                  <div className="step-header">
                    <span className="step-number" style={{ color: '#8B5CF6' }}>04</span>
                  </div>
                  <h3 className="step-title">On Time Shipping and Updates</h3>
                  <p className="step-text">Orders ship on schedule with clear updates until delivery.</p>
                </motion.div>
              </div>
            </StaggerContainer>

            <p className="process-closing">
              You always know what is happening and what comes next.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <div className="container products-container">
            <FadeIn>
              <div className="products-header">
                <h2 className="products-headline">Our Product Categories</h2>
                <p className="products-subline">
                  We supply export quality Indian spices for bulk buyers, distributors, and private label brands.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="products-grid">
              {/* Category 1: Blended Spices */}
              <motion.div className="product-category" variants={staggerItem} whileHover={{ y: -5 }}>
                <Image src="/blended_spices.png" alt="Bulk Blended Spices and Masalas for Export" width={400} height={300} className="category-image" />
                <h3 className="category-title">Blended Spices</h3>
                <p className="category-description">
                  Custom spice blends developed to precise specifications with controlled batch consistency.
                </p>
                <a href="/products" className="category-cta">
                  View Blended Spices →
                </a>
              </motion.div>

              {/* Category 2: Pure Spice Powders */}
              <motion.div className="product-category" variants={staggerItem} whileHover={{ y: -5 }}>
                <Image src="/pure_spice_powders.png" alt="Pure Spice Powders (Turmeric, Chilli, Coriander) for Export" width={400} height={300} className="category-image" />
                <h3 className="category-title">Pure Spice Powders</h3>
                <p className="category-description">
                  Single ingredient spice powders processed, tested, and packed for export scale supply.
                </p>
                <a href="/products" className="category-cta">
                  View Pure Spice Powders →
                </a>
              </motion.div>

              {/* Category 3: Seasonings */}
              <motion.div className="product-category" variants={staggerItem} whileHover={{ y: -5 }}>
                <Image src="/seasonings.png" alt="Bulk Seasonings and Custom Spice Blends for Export" width={400} height={300} className="category-image" />
                <h3 className="category-title">International Herbs and Seasonings</h3>
                <p className="category-description">
                  Functional seasoning mixes prepared for bulk supply and private label requirements.
                </p>
                <a href="/products" className="category-cta">
                  View International Herbs and Seasonings →
                </a>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>

        {/* Quality & Compliance Section */}
        <section className="quality-section">
          <div className="container quality-container">
            <FadeIn>
              <div className="quality-header">
                <h2 className="quality-headline">Quality, Compliance, and Accountability</h2>
                <p className="quality-subline">
                  Every shipment follows defined standards designed to protect your business.
                </p>
              </div>
            </FadeIn>

            <div className="quality-content">
              <StaggerContainer>
                <ul className="quality-list">
                  <motion.li className="quality-item" variants={staggerItem}>ISO and food safety compliant processes</motion.li>
                  <motion.li className="quality-item" variants={staggerItem}>Consistent batch level quality standards</motion.li>
                  <motion.li className="quality-item" variants={staggerItem}>Pricing confirmed before production begins</motion.li>
                  <motion.li className="quality-item" variants={staggerItem}>Documented quality checks during production and packing</motion.li>
                  <motion.li className="quality-item" variants={staggerItem}>Complete and accurate export documentation</motion.li>
                </ul>
              </StaggerContainer>
              <FadeIn direction="left" delay={0.2}>
                <div className="quality-image-container">
                  <Image
                    src="/quality-inspection.jpg"
                    alt="ISO Quality Inspection and Testing Process for Indian Spices"
                    width={700}
                    height={382}
                    className="quality-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            </div>

            <p className="quality-statement">
              We take responsibility for quality, compliance, and delivery so you do not have to manage supplier risk.
            </p>
          </div>
        </section>

        {/* Packaging & Private Label Capabilities Section */}
        <section className="packaging-section">
          <div className="container packaging-container">
            <FadeIn>
              <div className="packaging-header">
                <h2 className="packaging-headline">Packaging & Private Label Capabilities</h2>
                <p className="packaging-subline">
                  We support private labeling and export-ready packaging for importers and brands across global markets.
                </p>
              </div>
            </FadeIn>

            <div className="packaging-rebuilt-wrapper" style={{ marginTop: '40px' }}>
              <div className="packaging-grid-desktop desktop-only-flex">
                <div className="packaging-card">
                  <Image src="/packaging_1.jpg" alt="Premium chicken masala spice blend" width={400} height={400} className="packaging-image" loading="lazy" />
                </div>
                <div className="packaging-card">
                  <Image src="/packaging_2.jpg" alt="Premium red chilli powder" width={400} height={400} className="packaging-image" loading="lazy" />
                </div>
                <div className="packaging-card">
                  <Image src="/packaging_3.jpg" alt="Premium turmeric powder" width={400} height={400} className="packaging-image" loading="lazy" />
                </div>
                <div className="packaging-card">
                  <Image src="/packaging_4.jpg" alt="Premium coriander powder" width={400} height={400} className="packaging-image" loading="lazy" />
                </div>
              </div>

              {/* Mobile Draggable Carousel */}
              <div className="packaging-carousel-mobile mobile-only-block">
                <DraggableCarousel items={[
                  <div key="p1" className="packaging-card" style={{ width: '100%' }}>
                    <Image src="/packaging_1.jpg" alt="Premium chicken masala spice blend" width={400} height={400} className="packaging-image" loading="lazy" />
                  </div>,
                  <div key="p2" className="packaging-card" style={{ width: '100%' }}>
                    <Image src="/packaging_2.jpg" alt="Premium red chilli powder" width={400} height={400} className="packaging-image" loading="lazy" />
                  </div>,
                  <div key="p3" className="packaging-card" style={{ width: '100%' }}>
                    <Image src="/packaging_3.jpg" alt="Premium turmeric powder" width={400} height={400} className="packaging-image" loading="lazy" />
                  </div>,
                  <div key="p4" className="packaging-card" style={{ width: '100%' }}>
                    <Image src="/packaging_4.jpg" alt="Premium coriander powder" width={400} height={400} className="packaging-image" loading="lazy" />
                  </div>
                ]} />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container testimonials-container">
            <FadeIn>
              <div className="testimonials-header">
                <div className="rating-badge">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9098L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#4F46E5" />
                  </svg>
                  <span>Trusted by importers across 5+ countries</span>
                </div>
                <h2 className="testimonials-headline">Words of praise from others<br />about our presence.</h2>
              </div>
            </FadeIn>

            {/* Desktop Infinite Marquee */}
            <div className="marquee-viewport">
              <div className="marquee-track">
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <div key={`set1-${index}`} className="testimonial-card">
                    <div className="quote-icon">
                      <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17.92V32h14.08V17.92H7.04C7.04 11.9893 11.0293 7.04 17.92 7.04V0C6.72 0 0 6.72 0 17.92ZM22.08 17.92V32h14.08V17.92h-7.04c0-5.9307 3.9893-10.88 10.88-10.88V0c-11.2 0-17.92 6.72-17.92 17.92Z" fill="#E0E7FF" />
                      </svg>
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="author-avatar" />
                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-title">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Second set (duplicate for seamless loop) */}
                {testimonials.map((testimonial, index) => (
                  <div key={`set2-${index}`} className="testimonial-card">
                    <div className="quote-icon">
                      <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17.92V32h14.08V17.92H7.04C7.04 11.9893 11.0293 7.04 17.92 7.04V0C6.72 0 0 6.72 0 17.92ZM22.08 17.92V32h14.08V17.92h-7.04c0-5.9307 3.9893-10.88 10.88-10.88V0c-11.2 0-17.92 6.72-17.92 17.92Z" fill="#E0E7FF" />
                      </svg>
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="author-avatar" />
                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-title">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="testimonials-mobile-wrapper mobile-only-block" style={{ marginTop: '24px' }}>
              <DraggableCarousel items={testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card-mobile" style={{ width: '100%', margin: '0 auto' }}>
                  <div className="quote-icon">
                    <svg width="32" height="24" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 17.92V32h14.08V17.92H7.04C7.04 11.9893 11.0293 7.04 17.92 7.04V0C6.72 0 0 6.72 0 17.92ZM22.08 17.92V32h14.08V17.92h-7.04c0-5.9307 3.9893-10.88 10.88-10.88V0c-11.2 0-17.92 6.72-17.92 17.92Z" fill="#E0E7FF" />
                    </svg>
                  </div>
                  <div className="testimonial-content-mobile">
                    <p className="testimonial-quote">{t.quote}</p>
                    <div className="testimonial-author">
                      <Image src={t.image} alt={t.name} width={40} height={40} className="author-avatar" />
                      <div className="author-info">
                        <div className="author-name">{t.name}</div>
                        <div className="author-title">{t.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} />
            </div>
          </div>
        </section>




        {/* FAQ Section */}
        <FAQSection />


        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Weagle International?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Weagle International is a premium Indian spice exporter and manufacturer established in 2019. Weagle specializes in supplying high-quality blended spices, pure spice powders, and international herbs and seasonings to importers worldwide, including the USA, UK, EU, Nigeria, and Ghana.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Why choose Weagle for spice imports?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Weagle International offers ISO & FDA compliant spices with complete traceability, transparent pricing, and dedicated export support. With over 5 years of experience, Weagle has become a trusted partner for spice importers seeking premium quality Indian spices with reliable delivery.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What products does Weagle International export?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Weagle exports three main categories: Blended Spices & Masalas (curry powders, garam masala, tandoori masala), Pure Spice Powders (turmeric, red chilli, coriander), and International Herbs and Seasonings (custom blends for foodservice and QSR chains).'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How do I start importing spices from Weagle?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Contact Weagle International at info@weagleinternational.com or +91 7200550188 to request samples and pricing. Weagle\'s export team will provide a detailed quote within 24 hours and guide you through the entire import process.'
                  }
                }
              ]
            }),
          }}
        />

        {/* Final CTA Section */}
        < section className="final-cta-section" >
          <div className="container final-cta-container">
            <FadeIn className="cta-content">
              <div className="cta-text">
                <h2 className="cta-headline">Start Your First Order</h2>
                <p className="cta-subline">
                  Submit your requirements and receive a detailed quote within 24 hours.
                </p>
                <ul className="cta-benefits">
                  <li>No minimum order quantity for samples</li>
                  <li>Transparent pricing with no hidden costs</li>
                  <li>Direct communication with export team</li>
                </ul>
              </div>

              <div className="cta-form-wrapper">
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

                <form className="enquiry-form" aria-label="Contact enquiry form" onSubmit={(e) => handleFormSubmit(e, 'contact')}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input type="text" id="company" name="company" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="product">Product Interest *</label>
                    <select id="product" name="product" required>
                      <option value="">Select a category</option>
                      <option value="blended">Blended Spices</option>
                      <option value="pure">Pure Spice Powders</option>
                      <option value="seasonings">International Herbs and Seasonings</option>
                      <option value="custom">Custom Requirements</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="volume">Expected Monthly Volume</label>
                    <input type="text" id="volume" name="volume" placeholder="e.g., 500 kg" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Requirements</label>
                    <textarea id="message" name="message" rows={4} placeholder="Describe your specific needs, certifications required, or any questions..."></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn" aria-label="Submit contact enquiry" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section >

      </main >

      {/* Footer */}
      < footer className="footer" >
        <div className="container footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="Weagle International Logo" width="120" height="120" className="logo-icon-footer" />
                WEAGLE
              </div>
              <p className="footer-tagline">International Spice Exports</p>
              <p className="footer-address">
                Weagle International<br />
                No: 591D, Erode Road West,<br />
                Vellakovil, Tiruppur-638 111.<br />
                Tamilnadu, India.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h3 className="footer-heading">Company</h3>
                <ul className="footer-list">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); setIsFormExpanded(true); }}>Enquiry</a></li>
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
      </footer >
    </>
  );
}
