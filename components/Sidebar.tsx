'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDEBAR_BIO, SITE } from '@/data/content';

const NAV = [
  { href: '/', label: 'HOME' },
  { href: '/portfolio', label: 'PORTFOLIO' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
];

const MONO_NAV = {
  font: '400 10.5px/1 var(--font-mono)',
  letterSpacing: '.16em',
} as const;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div
      className="fixed bottom-0 left-0 top-0 z-[100] hidden w-[322px] flex-col justify-between gap-10 overflow-y-auto bg-white px-[30px] py-9 lg:flex"
      style={{ borderRight: '1px solid rgba(0,0,0,.12)' }}
    >
      <div>
        <Link
          href="/"
          className="anim-rise display block"
          style={{
            fontSize: 40,
            lineHeight: 0.94,
            letterSpacing: '-.02em',
            animationDelay: '.3s',
          }}
        >
          Flickz
          <br />
          <span className="italic">with</span>
          <br />
          Fitz
        </Link>

        <nav
          className="anim-rise mt-[38px] flex flex-col"
          style={{ animationDelay: '.38s' }}
          aria-label="Primary"
        >
          {NAV.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                style={{
                  ...MONO_NAV,
                  padding: i === 0 ? '0 0 11px' : '11px 0',
                  borderBottom: `1px solid ${active ? '#000' : 'rgba(0,0,0,.12)'}`,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <p
          className="anim-rise mt-9"
          style={{
            font: '400 13.5px/1.65 var(--font-sans)',
            color: 'rgba(0,0,0,.62)',
            textWrap: 'pretty',
            animationDelay: '.46s',
          }}
        >
          {SIDEBAR_BIO}
        </p>
      </div>

      <div
        className="anim-rise"
        style={{
          font: '400 10px/1.9 var(--font-mono)',
          letterSpacing: '.14em',
          color: 'rgba(0,0,0,.45)',
          animationDelay: '.54s',
        }}
      >
        <div className="flex items-center gap-2 text-black">
          <span className="anim-blink h-[6px] w-[6px] shrink-0 rounded-full bg-black" />
          {SITE.booking}
        </div>
        <a href={`mailto:${SITE.email}`} className="mt-[14px] block">
          {SITE.email.toUpperCase()}
        </a>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer noopener"
          className="block"
        >
          {SITE.instagramHandle.toUpperCase()}
        </a>
        <div className="mt-[14px] opacity-60">© 2026 FLICKZWITHFITZ</div>
      </div>
    </div>
  );
}
