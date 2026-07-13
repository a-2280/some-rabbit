"use client";

import Image from "next/image";
import LinkIcon from "./linkIcon";
import Link from "next/link";
import { useRef } from "react";

export default function FeaturedProject() {
  const glowVideoRef = useRef(null);

  const syncGlow = (e) => {
    const glow = glowVideoRef.current;
    if (glow && Math.abs(glow.currentTime - e.target.currentTime) > 0.15) {
      glow.currentTime = e.target.currentTime;
    }
  };

  return (
    <div className="flex flex-col align-center gap-40">
      <div className="glow-wrap pos-rel max-900px w-100">
        <div className="glow" aria-hidden="true">
          <Image
            className="bg-image"
            alt=""
            src="/images/merlin-labs.png"
            fill
          />
          <video
            ref={glowVideoRef}
            src="/video/merlin-labs.mov"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="bg-image"
          />
        </div>

        <div className="bg-grey pos-rel ratio-16-9 radius-12 overflow">
          <Image
            className="bg-image"
            alt=""
            src="/images/merlin-labs.png"
            fill
            loading="eager"
          />
          <video
            src="/video/merlin-labs.mov"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            className="bg-image"
            onTimeUpdate={syncGlow}
          />
        </div>
      </div>
      <div className="featured-info flex flex-col align-center gap-25">
        <div className="featured-text flex flex-col align-center difference invert">
          <div className="flex gap-5">
            <div className="featured-title h4">
              <p>Sam Richon</p>
              <Link href="#" className="url">Coming Soon!</Link>
            </div>
            <p>with C-B Works</p>
          </div>
          <p>Portfolio for Australia based photographer</p>
        </div>
        <LinkIcon link="#" />
      </div>
    </div>
  );
}
