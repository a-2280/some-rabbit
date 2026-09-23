"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { pickFooterPair } from "@/utils/footerColors"

export default function Footer() {
    const footerRef = useRef(null)
    const pairRef = useRef(null)
    const hiddenRef = useRef(true)

    useEffect(() => {
        const applyPair = () => {
            pairRef.current = pickFooterPair(pairRef.current)
            footerRef.current.style.setProperty("--footer-bg", pairRef.current.bg)
            footerRef.current.style.setProperty("--footer-text", pairRef.current.text)
        }

        // The footer is covered the moment its top edge reaches the bottom of the
        // screen. Measured live on every scroll rather than from a cached scroll
        // position, so it stays exact as the page height settles.
        const isHidden = () => footerRef.current.getBoundingClientRect().top >= window.innerHeight

        const onScroll = () => {
            const hidden = isHidden()
            if (hidden && !hiddenRef.current) applyPair()
            hiddenRef.current = hidden
        }

        applyPair()
        hiddenRef.current = isHidden()

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <footer ref={footerRef} className='colophon'>
            <div className='content p30 flex flex-col align-center gap-20 m-p20'>
                <div className='flex-1 flex align-center'>
                    <div className='h1 flex gap-60 m-flex-col m-gap-20'>
                        <p>Some</p>
                        <div className="flex gap-60 m-gap-20">
                            <p>Rabbit</p>
                            <p>,</p>
                        </div>
                        <p>LLC</p>
                    </div>
                </div>
                <div className='flex align-center gap-20 m-100 m-space-between m-gap-10'>
                    <p>San Diego, California</p>
                    <Link href='email:hello@somerabbit.studio'>hello@somerabbit.studio</Link>
                    <Link href='https://www.instagram.com/somerabbit.studio/'>instagram</Link>
                </div>
            </div>
        </footer>
    )
}
