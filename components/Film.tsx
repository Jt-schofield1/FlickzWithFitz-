'use client';

import { useEffect, useRef } from 'react';

/**
 * The ceremony film — one stitched, silent MP4 on a plain loop.
 *
 * The stage is 16/9 at every width because the footage is 16:9. The handoff
 * called for a 9/13 portrait stage on mobile, but `object-cover` then zoomed the
 * frame 2.57x and showed only 39% of its width, which read as stretched. Native
 * aspect everywhere, so nothing is cropped.
 *
 * It is 38 MB, so it is not fetched until the stage scrolls into view;
 * `preload="none"` plus a play-on-intersect keeps it off the critical path.
 * Autoplay only survives if the element is genuinely muted, and the declarative
 * attribute alone has proven unreliable — hence the imperative muting.
 */
export default function Film({ className }: { className?: string }) {
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
      style={{ aspectRatio: '16 / 9' }}
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
        className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[.18em] text-white lg:bottom-5 lg:left-[22px] lg:text-[10px] lg:tracking-[.2em]"
        style={{ textShadow: '0 1px 8px rgba(0,0,0,.6)' }}
      >
        CEREMONY — THE FILM
      </div>
    </div>
  );
}
