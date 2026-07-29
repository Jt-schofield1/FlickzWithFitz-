import { TESTIMONIALS } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="mt-[36px] px-5 lg:mt-[120px] lg:px-16">
      <h2 className="eyebrow">WHAT PEOPLE SAY</h2>

      <ul className="hsnap mt-4 gap-4 pb-[10px] lg:mt-[26px] lg:gap-5 lg:pb-[14px]">
        {TESTIMONIALS.map((t) => (
          <li
            key={t.attribution}
            className="w-[280px] shrink-0 pt-[14px] lg:w-[400px] lg:pt-[18px]"
            style={{
              scrollSnapAlign: 'start',
              borderTop: '1px solid rgba(0,0,0,.16)',
            }}
          >
            <blockquote
              className="display text-[19px] lg:text-[23px]"
              style={{ lineHeight: 1.4, textWrap: 'pretty' }}
            >
              <span className="lg:hidden">“{t.quoteShort}”</span>
              <span className="hidden lg:inline">“{t.quote}”</span>
            </blockquote>
            <div
              className="mt-3 font-mono text-[9px] lg:mt-4 lg:text-[9.5px]"
              style={{ letterSpacing: '.15em', color: 'rgba(0,0,0,.45)' }}
            >
              <span className="lg:hidden">{t.attributionShort}</span>
              <span className="hidden lg:inline">{t.attribution}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
