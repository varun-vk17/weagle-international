'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations'
import { motion } from 'framer-motion'

interface FAQItem {
    question: string
    answer: string
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs: FAQItem[] = [
        {
            question: "What is your minimum order quantity (MOQ)?",
            answer: "Our MOQ varies by product category. For blended spices, it's typically 500 kg per SKU. For pure spice powders, it's 1000 kg per variety. We can discuss flexible arrangements for trial orders."
        },
        {
            question: "What are your payment terms?",
            answer: "We work with 30% advance and 70% before shipment for new clients. Once we establish a relationship, we can discuss flexible terms including LC for larger orders. All pricing is confirmed upfront."
        },
        {
            question: "Can you customize spice blends to my specifications?",
            answer: "Yes, absolutely. We specialize in custom blends developed to your exact specifications. Share your requirements, and we'll prepare samples for approval with strict batch consistency across all future orders."
        },
        {
            question: "How long does it take from order to delivery?",
            answer: "Total timeline is 4-6 weeks: 10-15 days for production after sample approval, plus shipping (15-20 days to USA/EU, 7-10 days to Middle East, 20-25 days to Africa). We provide clear timelines and updates at every stage."
        },
        {
            question: "What happens if there's a quality issue with my shipment?",
            answer: "We take full responsibility for quality issues. If a problem arises, we respond immediately with replacement shipments, refunds, or solutions. Our goal is long-term partnerships, not one-time transactions."
        },
        {
            question: "Do you provide samples before I place a bulk order?",
            answer: "Yes, we provide samples with lab reports for evaluation. Contact us at info@weagleinternational.com or +91 7200550188. We'll send samples within 3-5 business days and provide a detailed quote within 24 hours."
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq-section">
            <div className="container faq-container">
                <FadeIn>
                    <div className="faq-header">
                        <div className="section-badge">FAQ</div>
                        <h2 className="faq-title">Frequently Asked Questions</h2>
                        <p className="faq-subtitle">Everything you need to know about importing spices from Weagle International</p>
                    </div>
                </FadeIn>

                <StaggerContainer className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                            variants={staggerItem}
                        >
                            <button
                                className="faq-question-btn"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="faq-question-text">{faq.question}</span>
                                <span className="faq-icon">
                                    {openIndex === index ? (
                                        <Minus size={20} strokeWidth={2.5} />
                                    ) : (
                                        <Plus size={20} strokeWidth={2.5} />
                                    )}
                                </span>
                            </button>

                            <motion.div
                                className="faq-answer-wrapper"
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
