"use client";

import Image from "next/image";
import { CheckCircle2, DollarSign, Clock, Eye, MessageCircle, BadgeCheck, FileCheck, Calendar } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn, StaggerContainer, staggerItem, ScaleIn, RevealText, ParallaxImage } from "@/components/animations";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  const testimonials = [
    {
      quote: "Weagle International has been our trusted spice supplier for three years. Consistent quality and reliable delivery have eliminated our supply chain concerns.",
      name: "Rajesh Kumar",
      title: "Supply Chain Director",
      company: "Global Foods Distribution",
      color: "#F59E0B",
      bgColor: "#000000",
      image: "/avatar-rajesh.png"
    },
    {
      quote: "Their batch consistency and compliance documentation meet our strict quality standards. We have not experienced a single quality issue in 24 months.",
      name: "Maria Santos",
      title: "Quality Assurance Manager",
      company: "Premium Spice Importers",
      color: "#EF4444",
      bgColor: "#10B981",
      image: "/avatar-maria.png"
    },
    {
      quote: "Pricing transparency and on-time shipments allow us to plan inventory with confidence. A reliable export partner for our private label business.",
      name: "David Chen",
      title: "Operations Director",
      company: "Culinary Brands Inc",
      color: "#EC4899",
      bgColor: "#F59E0B",
      image: "/avatar-david.png"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Header / Navigation */}
      {!isFormExpanded && (
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
              <button
                onClick={() => setIsFormExpanded(true)}
                className="btn btn-primary btn-nav"
                style={{ cursor: 'pointer' }}
                aria-label="Open request sample and pricing form"
              >
                Request Sample & Pricing
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        </header>
      )}

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
                  <RevealText delay={0.2}>
                    Import Indian Spices With Complete Peace of Mind
                  </RevealText>
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

                      <form className="modal-enquiry-form" aria-label="Sample and pricing request form">
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
                            <option value="seasonings">Seasonings</option>
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

                        <button type="submit" className="form-submit-btn" aria-label="Submit enquiry form">
                          Submit Enquiry
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
                <ParallaxImage
                  src="/product_spice.png"
                  alt="Premium Export Quality Indian Spices - Weagle International"
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
            <div className="marquee-track">
              <div className="marquee-content">
                <Image src="/fssai-logo.png" alt="FSSAI Food Safety Certification" width={120} height={60} className="cert-logo" />
                <Image src="/iec-logo.png" alt="IEC Import Export Code Certification" width={120} height={60} className="cert-logo" />
                <Image src="/msme-logo.png" alt="MSME Micro Small Medium Enterprise Certification" width={120} height={60} className="cert-logo" />
                <Image src="/gmp-logo.png" alt="GMP Good Manufacturing Practice Certification" width={120} height={60} className="cert-logo" />
                <Image src="/haccp-logo.png" alt="HACCP Hazard Analysis Critical Control Point Certification" width={120} height={60} className="cert-logo" />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* B2B Positioning Section */}
        <section className="positioning-section">
          <div className="container positioning-container">
            <FadeIn>
              <h2 className="positioning-headline">
                <RevealText>An Export Partner for Serious Importers</RevealText>
              </h2>

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
                <h2 className="reliability-headline">
                  <RevealText>What You Can Rely On Every Shipment</RevealText>
                </h2>
                <p className="reliability-intro">
                  When your supply chain is stable, everything else runs smoother.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="reliability-grid">
              {/* Card 1 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper">
                  <BadgeCheck className="reliability-icon" strokeWidth={1.5} />
                </div>
                <h3 className="reliability-card-title">Consistent Batch Quality</h3>
                <p className="reliability-card-text">You get consistent batch quality across orders.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper">
                  <FileCheck className="reliability-icon" strokeWidth={1.5} />
                </div>
                <h3 className="reliability-card-title">Confirmed Pricing</h3>
                <p className="reliability-card-text">You get pricing confirmed before production begins.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper">
                  <Calendar className="reliability-icon" strokeWidth={1.5} />
                </div>
                <h3 className="reliability-card-title">Clear Timelines</h3>
                <p className="reliability-card-text">You get clear timelines you can plan around.</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div className="reliability-card" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper">
                  <Eye className="reliability-icon" strokeWidth={1.5} />
                </div>
                <h3 className="reliability-card-title">Full Visibility</h3>
                <p className="reliability-card-text">You get full visibility from sourcing to shipment.</p>
              </motion.div>

              {/* Card 5 - Wide */}
              <motion.div className="reliability-card reliability-card-wide" variants={staggerItem} whileHover={{ y: -5 }}>
                <div className="reliability-icon-wrapper">
                  <MessageCircle className="reliability-icon" strokeWidth={1.5} />
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
                <h2 className="process-headline">
                  <RevealText>A Controlled Export Process From Start to Finish</RevealText>
                </h2>
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
                <Image src="/export_process_center.png" alt="Export Process Tracking System" width={500} height={600} className="process-center-img" />
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
                <h2 className="products-headline">
                  <RevealText>Our Product Categories</RevealText>
                </h2>
                <p className="products-subline">
                  We supply export quality Indian spices for bulk buyers, distributors, and private label brands.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="products-grid">
              {/* Category 1: Blended Spices */}
              <motion.div className="product-category" variants={staggerItem} whileHover={{ y: -5 }}>
                <Image src="/blended_spices.png" alt="Blended Spices and Masalas for Export" width={400} height={300} className="category-image" />
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
                <Image src="/pure_spice_powders.png" alt="Pure Spice Powders for Export" width={400} height={300} className="category-image" />
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
                <Image src="/seasonings.png" alt="Seasonings and Spice Blends for Export" width={400} height={300} className="category-image" />
                <h3 className="category-title">Seasonings</h3>
                <p className="category-description">
                  Functional seasoning mixes prepared for bulk supply and private label requirements.
                </p>
                <a href="/products" className="category-cta">
                  View Seasonings →
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
                <h2 className="quality-headline">
                  <RevealText>Quality, Compliance, and Accountability</RevealText>
                </h2>
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
                  <ParallaxImage
                    src="/quality-inspection.png"
                    alt="Quality Inspection and Testing Process"
                    width={700}
                    height={382}
                    className="quality-image"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </FadeIn>
            </div>

            <p className="quality-statement">
              We take responsibility for quality, compliance, and delivery so you do not have to manage supplier risk.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container testimonials-container">
            <FadeIn>
              <div className="testimonials-header">
                <h2 className="testimonials-headline">Trusted by Importers Who Depend on Consistency</h2>
                <p className="testimonials-subline">
                  Importers choose us because reliability matters more than promises.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="testimonials-stack">
                {testimonials.map((testimonial, index) => {
                  const position = (index - currentIndex + testimonials.length) % testimonials.length;
                  return (
                    <div
                      key={index}
                      className={`testimonial-card testimonial-card-${position}`}
                      style={{
                        backgroundColor: testimonial.bgColor,
                        '--card-color': testimonial.color
                      } as React.CSSProperties}
                    >
                      <div className="testimonial-content">
                        <p className="testimonial-quote">{testimonial.quote}</p>
                        <div className="testimonial-author">
                          <Image src={testimonial.image} alt={`${testimonial.name} - ${testimonial.title}`} width={60} height={60} className="author-avatar" />
                          <div className="author-info">
                            <div className="author-name">{testimonial.name}</div>
                            <div className="author-title">{testimonial.title}</div>
                            <div className="author-company">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="testimonials-nav">
                <button onClick={handlePrev} className="nav-button" aria-label="Previous testimonial">
                  ←
                </button>
                <button onClick={handleNext} className="nav-button" aria-label="Next testimonial">
                  →
                </button>
              </div>
            </FadeIn>
          </div>
        </section >

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
                <form className="enquiry-form" aria-label="Contact enquiry form">
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
                      <option value="seasonings">Seasonings</option>
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

                  <button type="submit" className="form-submit-btn" aria-label="Submit contact enquiry">
                    Submit Enquiry
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
                <img src="/weagle-logo.svg" alt="Weagle International Logo" width="32" height="32" className="logo-icon-footer" />
                WEAGLE
              </div>
              <p className="footer-tagline">International Spice Exports</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h3 className="footer-heading">Company</h3>
                <ul className="footer-list">
                  <li><a href="#certifications">Certifications</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Products</h3>
                <ul className="footer-list">
                  <li><a href="#blended">Blended Spices</a></li>
                  <li><a href="#pure">Pure Powders</a></li>
                  <li><a href="#seasonings">Seasonings</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Contact</h3>
                <ul className="footer-list">
                  <li>Email: <a href="mailto:export@weagleinternational.com" aria-label="Email Weagle International">export@weagleinternational.com</a></li>
                  <li>Phone: <a href="tel:+919876543210" aria-label="Call Weagle International">+91 98765 43210</a></li>
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
