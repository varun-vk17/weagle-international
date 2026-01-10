'use client'

import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import Image from "next/image"

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

interface RevealTextProps {
    children: string
    className?: string
    delay?: number
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })
    const words = children.split(" ")

    return (
        <motion.span
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1, delayChildren: delay }}
            style={{ display: "inline-block", flexWrap: "wrap" }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                ease: [0.33, 1, 0.68, 1] // Cubic bezier for premium feel
                            }
                        }
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    )
}

interface ParallaxImageProps {
    src: string
    alt: string
    width: number
    height: number
    className?: string
    priority?: boolean
    style?: React.CSSProperties
}

export function ParallaxImage({ src, alt, width, height, className, priority, style }: ParallaxImageProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
    // Scale slightly to cover the movement area
    const scale = 1.1

    return (
        <div
            ref={ref}
            className={`overflow-hidden ${className}`}
            style={{ position: 'relative', overflow: 'hidden', ...style }} // Ensure container clips
        >
            <motion.div style={{ y, scale, width: '100%', height: '100%' }}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority={priority}
                />
            </motion.div>
        </div>
    )
}
