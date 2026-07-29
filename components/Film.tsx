'use client';

import { useEffect, useRef } from 'react';

/**
 * The ceremony film — one stitched, silent MP4 on a plain loop.
 *
 * It is 38 MB, so it is not fetched until the stage scrolls into view;
 * `preload="none"` plus a play-on-intersect keeps it off the critical path.
 * Autoplay only survives if the element is genuinely muted, and the declarative
 * attribute alone has proven unreliable — hence the imperative muting.
 */
export default function Film({
  aspect,
  labelInset,
  className,
}: {
  aspect: string;
  labelInset: { left: number; bottom: number; size: number; tracking: string };
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.volume = 0;
    el.setAttribute('muted', '');

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.muted = true;
          const p = el.play();
          if (p) p.catch((err) => console.warn('film play blocked:', err));
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-black ${className ?? ''}`}
      style={{ aspectRatio: aspect }}
    >
      <video
        ref={ref}
        src="/film/ceremony.mp4"
        poster="/photos/kellywedding2-0110.jpg"
        muted
        loop
        playsInline
        preload="none"
        aria-label="Ceremony film, silent"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute text-white"
        style={{
          left: labelInset.left,
          bottom: labelInset.bottom,
          font: `400 ${labelInset.size}px/1 var(--font-mono)`,
          letterSpacing: labelInset.tracking,
          textShadow: '0 1px 8px rgba(0,0,0,.6)',
        }}
      >
        CEREMONY — THE FILM
      </div>
    </div>
  );
}
