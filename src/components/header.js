"use client"

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FRAME_COUNT = 121;

export default function Header() {
  const canvasRef = useRef(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawFrame = (img) => {
      if (!img.complete || !img.naturalWidth) return;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = `/rabbit-frames/frame_${String(i).padStart(4, "0")}.jpg`;
      return img;
    });

    images[0].addEventListener("load", () => drawFrame(images[0]), { once: true });

    const playhead = { frame: 0 };

    gsap.to(playhead, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      onUpdate: () => drawFrame(images[Math.round(playhead.frame)]),
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <div className="masthead">
      <p>Some</p>
      <div className="pos-rel ratio-14-9 w-70px">
        <canvas
          ref={canvasRef}
          width={768}
          height={496}
          className="bg-image"
        />
      </div>
      <p>Rabbit</p>
    </div>
  );
}
