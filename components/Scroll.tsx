'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/** Whole-element view range: entering the viewport through leaving it. */
const VIEW = ['start end', 'end start'] as const;

/**
 * Slow vertical drift behind a fixed frame. The child fills the frame and is
 * over-scaled so the travel never exposes an edge.
 */
export function Parallax({
  children,
  aspect,
  className,
}: {
  children: ReactNode;
  aspect: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...VIEW] });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    // `relative` is required: useScroll measures against the offset parent.
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{ aspectRatio: aspect }}
    >
      <motion.div
        className="h-full w-full"
        style={reduced ? undefined : { y, scale: 1.16 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Column offset that runs against the scroll; `reverse` mirrors the travel. */
export function Drift({
  children,
  reverse = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...VIEW] });
  const y = useTransform(scrollYProgress, [0, 1], reverse ? [-30, 30] : [30, -30]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className ?? ''}`}
      style={reduced ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}

/**
 * The centrepiece: a pinned frame whose backdrop shrinks while the statement
 * sits over it in `difference`, so the type inverts against whatever passes
 * behind it.
 */
export function PinnedStatement({
  image,
  children,
}: {
  image: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [...VIEW] });
  const scale = useTransform(scrollYProgress, [0.1, 0.8], [1, 0.52], { clamp: true });

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={reduced ? undefined : { scale }}>
          {image}
        </motion.div>
        <div
          className="relative z-[2] px-10 text-center text-white"
          style={{ mixBlendMode: 'difference' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
