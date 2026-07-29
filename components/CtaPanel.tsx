import Link from 'next/link';
import { SITE } from '@/data/content';

type Props = {
  /** Two lines; the second is set in italic. */
  lines: [string, string];
  /** About routes on to the archive as well; Home does not. */
  secondary?: { href: string; label: string };
  variant?: 'hero' | 'statement';
  /** The mobile About panel ends on the button — no contact row. */
  footer?: 'both' | 'desktop-only';
};

const VARIANTS = {
  hero: { mobile: 38, mobileLeading: 1.02, desktop: 'clamp(44px,5vw,76px)', tracking: '-.025em' },
  statement: { mobile: 32, mobileLeading: 1.1, desktop: 'clamp(40px,4.6vw,68px)', tracking: '-.02em' },
} as const;

export default function CtaPanel({
  lines,
  secondary,
  variant = 'hero',
  footer = 'both',
}: Props) {
  const v = VARIANTS[variant];

  return (
    <section className="panel-dark mt-10 bg-black px-5 pb-10 pt-[34px] text-white lg:mt-[130px] lg:px-16 lg:py-[90px]">
      <p className="display">
        <span
          className="block lg:hidden"
          style={{ fontSize: v.mobile, lineHeight: v.mobileLeading }}
        >
          {lines[0]}
          <br />
          <span className="italic">{lines[1]}</span>
        </span>
        <span
          className="hidden lg:block"
          style={{
            fontSize: v.desktop,
            lineHeight: variant === 'hero' ? 1 : 1.06,
            letterSpacing: v.tracking,
            maxWidth: 820,
          }}
        >
          {lines[0]}
          <br />
          <span className="italic">{lines[1]}</span>
        </span>
      </p>

      <div className="mt-[22px] flex flex-wrap gap-[14px] lg:mt-9">
        <Link
          href="/contact"
          className="btn btn-invert min-h-[48px] w-full justify-center lg:w-auto lg:justify-start"
        >
          CHECK YOUR DATE →
        </Link>
        {secondary && (
          <Link href={secondary.href} className="btn btn-ghost hidden min-h-[48px] lg:inline-flex">
            {secondary.label}
          </Link>
        )}
      </div>

      {footer === 'both' && (
        <div
          className="mt-[30px] font-mono text-[9px] leading-[1.9] opacity-55 lg:hidden"
          style={{ letterSpacing: '.13em' }}
        >
          {SITE.email.toUpperCase()}
          <br />
          {SITE.instagramHandle.toUpperCase()} · {SITE.location.toUpperCase()}
        </div>
      )}

      <div
        className="mt-20 hidden justify-between pt-[18px] font-mono text-[10px] opacity-55 lg:flex"
        style={{ letterSpacing: '.14em', borderTop: '1px solid rgba(255,255,255,.22)' }}
      >
        <span>{SITE.email.toUpperCase()}</span>
        <span>{SITE.instagramHandle.toUpperCase()}</span>
        <span>{SITE.location.toUpperCase()}</span>
      </div>
    </section>
  );
}
