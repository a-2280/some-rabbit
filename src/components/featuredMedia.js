"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

const GLOW_WIDTH = 64
const GLOW_HEIGHT = 40

export default function FeaturedMedia({ videoUrl, posterUrl, link }) {
    const videoRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        const canvas = canvasRef.current
        if (!video || !canvas) return

        const context = canvas.getContext("2d")
        const paint = source => context.drawImage(source, 0, 0, GLOW_WIDTH, GLOW_HEIGHT)

        const poster = new window.Image()
        poster.onload = () => {
            if (video.readyState < video.HAVE_CURRENT_DATA) paint(poster)
        }
        poster.src = posterUrl

        if (typeof video.requestVideoFrameCallback === "function") {
            let handle
            const onFrame = () => {
                paint(video)
                handle = video.requestVideoFrameCallback(onFrame)
            }
            handle = video.requestVideoFrameCallback(onFrame)
            return () => video.cancelVideoFrameCallback(handle)
        }

        let frame
        let lastTime = -1
        const onTick = () => {
            frame = requestAnimationFrame(onTick)
            if (video.readyState < video.HAVE_CURRENT_DATA || video.currentTime === lastTime) return
            lastTime = video.currentTime
            paint(video)
        }

        onTick()
        return () => cancelAnimationFrame(frame)
    }, [posterUrl])

    const Media = link ? Link : "div"

    return (
        <>
            <canvas ref={canvasRef} width={GLOW_WIDTH} height={GLOW_HEIGHT} className='ambilight max-900 ratio-16-10' aria-hidden='true' />
            <Media href={link} className='project-media hover--zoom bg-grey pos-rel ratio-16-10 max-900 radius-12 overflow m-p20'>
                <Image className='bg-image' src={posterUrl} alt='Featured project' fill />
                <video ref={videoRef} className='bg-image' src={videoUrl} poster={posterUrl} autoPlay muted loop playsInline />
            </Media>
        </>
    )
}
