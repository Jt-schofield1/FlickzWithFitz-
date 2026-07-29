import type { Metadata } from 'next';
import { Suspense } from 'react';
import Gallery from '@/components/Gallery';
import { PHOTO_COUNT } from '@/data/photos';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `The whole archive — ${PHOTO_COUNT} frames of weddings, portraits, details, places and pets from Erie, Pennsylvania.`,
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <div className="px-5 pt-6 lg:px-16 lg:pt-[110px]">
        <p className="eyebrow">PORTFOLIO — {PHOTO_COUNT} FRAMES</p>
        <h1 className="display mt-3 overflow-hidden text-[42px] leading-none tracking-[-.025em] lg:mt-[22px] lg:text-[clamp(52px,5.6vw,84px)] lg:tracking-[-.028em]">
          <span
            className="clip-line anim-clipup"
            style={{ animationDelay: '.1s', animationDuration: '1s' }}
          >
            The whole <span className="italic">archive.</span>
          </span>
        </h1>
      </div>

      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
    </>
  );
}
