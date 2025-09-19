'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: boolean;
}

export default function VideoBackground({ src, className = '', overlay = true }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Fallback to poster image if video fails to play
        console.log('Video autoplay failed, using poster image');
      });
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        poster={src.replace('.mp4', '.jpg')}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280')`
          }}
        />
      </video>
      {overlay && <div className="forest-overlay" />}
    </div>
  );
}