'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { CATEGORIES } from '@/data/photos';

const BOX_W = 250;
const BOX_H = 320;

/**
 * The index rows, plus the image that follows the cursor across them.
 *
 * Pointer coordinates are written straight to the box's style — putting them
 * in React state and easing the result made the preview trail the row you were
 * actually on.
 */
export default function CategoryIndex() {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  return (
    <section
      className="relative mt-[130px] px-16"
      onMouseMove={(e) => {
        const box = boxRef.current;
        if (!box) return;
        const r = e.currentTarget.getBoundingClientRect();
        box.style.transform = `translate3d(${e.clientX - r.left - BOX_W / 2}px,${
          e.clientY - r.top - BOX_H / 2
        }px,0)`;
      }}
      onMouseLeave={() => setVisible(false)}
    >
      <h2
        className="eyebrow pb-5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}
      >
        THE WORK — BY CATEGORY
      </h2>

      {CATEGORIES.map((c) => (
        <Link
          key={c.name}
          href={`/portfolio?c=${c.name}`}
          className="cat-row"
          onMouseEnter={() => {
            if (imgRef.current) imgRef.current.src = `/photos/${c.hero}-400.webp`;
            setVisible(true);
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: 10, letterSpacing: '.18em', opacity: 0.45 }}
          >
            {c.num}
          </span>
          <span
            className="display"
            style={{
              fontSize: 'clamp(34px,4vw,52px)',
              lineHeight: 1,
              letterSpacing: '-.02em',
            }}
          >
            {c.name}
          </span>
          <span className="flex items-baseline gap-7 justify-self-end whitespace-nowrap">
            <span
              className="font-mono"
              style={{ fontSize: 10.5, lineHeight: 1.5, letterSpacing: '.1em', opacity: 0.5 }}
            >
              {c.count} FRAMES
            </span>
            <span
              className="font-mono"
              style={{ fontSize: 10, letterSpacing: '.18em' }}
            >
              VIEW →
            </span>
          </span>
        </Link>
      ))}

      <div
        ref={boxRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20"
        style={{
          width: BOX_W,
          height: BOX_H,
          willChange: 'transform, opacity',
          transition: 'opacity .16s linear, transform .12s linear',
          opacity: visible ? 1 : 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={`/photos/${CATEGORIES[0].hero}-400.webp`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
