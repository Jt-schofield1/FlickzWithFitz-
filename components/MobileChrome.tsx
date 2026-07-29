'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/data/content';

const TABS = [
  { href: '/', label: 'HOME' },
  { href: '/portfolio', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'BOOK' },
];

export function MobileTopBar() {
  return (
    <header
      className="sticky top-0 z-[60] flex items-center justify-between px-5 py-[15px] lg:hidden"
      style={{
        background: 'rgba(255,255,255,.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(0,0,0,.07)',
      }}
    >
      <Link href="/" className="display" style={{ fontSize: 21, lineHeight: 1 }}>
        Flickz<span className="italic">with</span>Fitz
      </Link>
      <span
        style={{
          font: '400 9px/1 var(--font-mono)',
          letterSpacing: '.14em',
          color: 'rgba(0,0,0,.4)',
        }}
      >
        {SITE.location.toUpperCase()}
      </span>
    </header>
  );
}

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary tabs"
      className="fixed bottom-0 left-0 right-0 z-[60] flex justify-around px-3 pb-4 pt-[10px] lg:hidden"
      style={{
        background: 'rgba(255,255,255,.9)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(0,0,0,.1)',
      }}
    >
      {TABS.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? 'page' : undefined}
            className="flex min-h-[44px] items-center px-3 py-3"
            style={{
              font: '400 9.5px/1 var(--font-mono)',
              letterSpacing: '.12em',
              borderBottom: `2px solid ${active ? '#000' : 'rgba(0,0,0,.12)'}`,
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
