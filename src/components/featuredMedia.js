"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function FeaturedMedia({ videoUrl, posterUrl, link }) {
    const videoRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        let frame
        let flip = false
        const draw = () => {
            context.drawImage(video, 0, 0, 160, 95)
            flip = !flip
            canvas.style.setProperty("--ambilight-nudge", flip ? "0.01px" : "0px")
            frame = video.requestVideoFrameCallback(draw)
        }
        frame = video.requestVideoFrameCallback(draw)
        return () => video.cancelVideoFrameCallback(frame)
    }, [])

    const Media = link ? Link : "div"

    return (
        <div className='ambilight-wrap pos-rel w-100 max-900'>
            <canvas ref={canvasRef} width={160} height={95} className='ambilight' aria-hidden='true' />
            <Media href={link} className='project-media hover--zoom bg-grey pos-rel ratio-49-29 max-900 radius-12 overflow m-p20'>
                <Image className='bg-image' src={posterUrl} alt='Featured project' fill />
                <video ref={videoRef} crossOrigin='anonymous' className='bg-image' src={videoUrl} poster={posterUrl} autoPlay muted loop playsInline />
            </Media>
        </div>
    )
}
