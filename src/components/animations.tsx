'use client'

import { motion, useInView, PanInfo, useAnimation } from 'framer-motion'
import { useRef, ReactNode, useState, useEffect } from 'react'

interface FadeInProps {
    children: ReactNode
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    fullWidth?: boolean
    className?: string
}

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    fullWidth = false,
    className = ''
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-100px'
    })

    const directionOffset = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { y: 0, x: 20 },
        right: { y: 0, x: -20 }
    }

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut'
            }}
            className={className}
            style={fullWidth ? { width: '100%' } : {}}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    staggerDelay?: number
    className?: string
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = ''
}: StaggerContainerProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-100px'
    })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

import { Variants } from 'framer-motion';

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
}

interface ScaleInProps {
    children: ReactNode
    delay?: number
    className?: string
}

export function ScaleIn({ children, delay = 0, className = '' }: ScaleInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-100px'
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut'
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Draggable Carousel Component
interface DraggableCarouselProps {
    items: ReactNode[]
    className?: string
    gap?: number
    loop?: boolean
}

export function DraggableCarousel({ items, className = '', gap = 24, loop = true }: DraggableCarouselProps) {
    const [index, setIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()

    // Calculate swipe constraints or logic
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50 // Minimum distance to trigger slide change

        if (info.offset.x < -threshold) {
            // Swipe Left -> Next
            if (index < items.length - 1) {
                setIndex(index + 1)
            } else if (loop) {
                setIndex(0) // Loop back to start
            }
        } else if (info.offset.x > threshold) {
            // Swipe Right -> Prev
            if (index > 0) {
                setIndex(index - 1)
            } else if (loop) {
                setIndex(items.length - 1) // Loop to end
            }
        }
    }

    // We render only the active item with AnimatePresence for smooth transitions?
    // OR we render a strip and animate X?
    // User wants "lag-free". Rendering a strip and animating x is often smoother than unmounting/mounting.
    // However, an infinite loop with a strip requires complex cloning.
    // Let's stick to AnimatePresence but optimized for swipe feel. 
    // Actually, "lag" often comes from react re-renders.

    // BETTER APPROACH for "Lag Free": Keep all items mounted, snap to position?
    // Or use AnimatePresence with mode='popLayout'.

    return (
        <div className={`draggable-carousel-container ${className}`} style={{ overflow: 'hidden', touchAction: 'pan-y' }} ref={containerRef}>
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}
            >
                {/* We wrap the content in a motion div that animates smoothly based on index key */}
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ width: '100%' }}
                >
                    {items[index]}
                </motion.div>
            </motion.div>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: i === index ? '#000000' : '#E5E7EB',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            transform: i === index ? 'scale(1.2)' : 'scale(1)'
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows (Optional but helpful) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', pointerEvents: 'none', padding: '0 8px' }}>
                <button
                    onClick={() => setIndex(loop ? (index - 1 + items.length) % items.length : Math.max(0, index - 1))}
                    style={{ pointerEvents: 'auto', background: 'white', borderRadius: '50%', width: 40, height: 40, border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                >
                    ←
                </button>
                <button
                    onClick={() => setIndex(loop ? (index + 1) % items.length : Math.min(items.length - 1, index + 1))}
                    style={{ pointerEvents: 'auto', background: 'white', borderRadius: '50%', width: 40, height: 40, border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                >
                    →
                </button>
            </div>
        </div>
    )
}
