"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
            if (!video.muted) video.muted = true;
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} controls autoPlay muted loop playsInline preload="auto" poster={poster}>
      <source src={src} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  );
}
