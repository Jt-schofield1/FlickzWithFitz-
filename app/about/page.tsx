import type { Metadata } from 'next';
import CtaPanel from '@/components/CtaPanel';
import Photo from '@/components/Photo';
import { Parallax } from '@/components/Scroll';
import { HOW_I_WORK, STATS, WHAT_I_SHOOT } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Cameron Fitzsimmons — ten years photographing weddings, portraits and everything in between in Erie, Pennsylvania.',
  alternates: { canonical: '/about' },
};

const RULE = '1px solid rgba(0,0,0,.15)';
const HAIRLINE = '1px solid rgba(0,0,0,.14)';

export default function AboutPage() {
  return (
    <>
      <div className="px-5 pt-[26px] lg:px-16 lg:pt-[110px]">
        <p className="eyebrow">ABOUT — CAMERON FITZSIMMONS</p>
        <h1 className="display mt-3 overflow-hidden text-[40px] leading-none tracking-[-.025em] lg:mt-[22px] lg:text-[clamp(50px,5.4vw,82px)]">
          <span
            className="clip-line anim-clipup"
            style={{ animationDelay: '.1s', animationDuration: '1s' }}
          >
            Ten years of
          </span>
          <span
            className="clip-line anim-clipup italic"
            style={{ animationDelay: '.26s', animationDuration: '1s' }}
          >
            slowing time down.
          </span>
        </h1>
      </div>

      <div
        className="mt-[26px] grid items-start gap-11 px-5 lg:mt-16 lg:px-16"
        style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,330px),1fr))' }}
      >
        <figure className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <Photo
            name="cameron"
            alt="Cameron Fitzsimmons"
            sizes="(min-width:1024px) 40vw, 100vw"
            priority
            className="anim-scz h-full w-full object-cover"
          />
          <figcaption
            className="absolute bottom-0 left-0 bg-white px-[13px] py-[11px] font-mono text-[9px] lg:px-4 lg:py-[14px] lg:text-[9.5px]"
            style={{ letterSpacing: '.14em', color: 'rgba(0,0,0,.5)' }}
          >
            CAMERON FITZSIMMONS — ERIE, PA
          </figcaption>
        </figure>

        <div className="pt-6 lg:pt-[6px]">
          <p
            className="display text-[22px] lg:text-[29px]"
            style={{ lineHeight: 1.4, letterSpacing: '-.01em', textWrap: 'pretty' }}
          >
            I&rsquo;m Cameron Fitzsimmons, the photographer behind FlickzWithFitz, based in
            Erie, PA.
          </p>
          <p
            className="mt-[18px] text-[13.5px] leading-[1.7] lg:mt-[26px] lg:text-[15px] lg:leading-[1.75]"
            style={{ color: 'rgba(0,0,0,.66)', textWrap: 'pretty' }}
          >
            Ten years behind the lens, and the job hasn&rsquo;t changed: catch what&rsquo;s
            actually happening, and stay out of its way while it does. Photography has always
            been my way of slowing things down. Life moves fast — a good photo holds on to a
            single second forever.
          </p>
          <p
            className="mt-4 text-[13.5px] leading-[1.7] lg:mt-5 lg:text-[15px] lg:leading-[1.75]"
            style={{ color: 'rgba(0,0,0,.66)', textWrap: 'pretty' }}
          >
            Milestone, wedding, updated portrait, or just an honest moment worth keeping —
            I&rsquo;m here to turn real life into something lasting. No stiff posing. No fake
            laughing at nothing.
          </p>

          <dl
            className="mt-[30px] grid grid-cols-2 lg:mt-11"
            style={{ borderTop: RULE }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  i % 2 === 0
                    ? 'py-4 pr-4 lg:py-5 lg:pr-5'
                    : 'py-4 pl-[18px] lg:py-5 lg:pl-6'
                }
                style={{
                  borderBottom: RULE,
                  borderRight: i % 2 === 0 ? RULE : undefined,
                }}
              >
                <dd className="display text-[34px] leading-none lg:text-[44px]">
                  {s.value}
                </dd>
                <dt
                  className="mt-[5px] font-mono text-[9px] lg:mt-[6px] lg:text-[9.5px]"
                  style={{ letterSpacing: '.14em', color: 'rgba(0,0,0,.45)' }}
                >
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-[34px] lg:mt-[130px] lg:px-16">
        <div className="hidden lg:block">
          <Parallax aspect="21/9">
            <Photo
              name="DSC04640"
              alt="Silhouette beneath the trees"
              sizes="(min-width:1024px) calc(100vw - 450px), 100vw"
              className="h-full w-full object-cover"
            />
          </Parallax>
        </div>
        <div className="overflow-hidden lg:hidden" style={{ aspectRatio: '3/2' }}>
          <Photo
            name="DSC04640"
            alt="Silhouette beneath the trees"
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="mt-8 px-5 lg:mt-[120px] lg:px-16">
        <h2 className="eyebrow pb-[14px] lg:pb-6">HOW I WORK</h2>
        <div>
          {HOW_I_WORK.map((step, i) => (
            <div
              key={step.num}
              className="grid gap-6 py-[14px] lg:grid-cols-[1fr_auto] lg:py-[22px]"
              style={{
                borderTop: HAIRLINE,
                borderBottom: i === HOW_I_WORK.length - 1 ? HAIRLINE : undefined,
              }}
            >
              <div>
                <div className="flex items-baseline justify-between lg:block">
                  <h3 className="display text-2xl lg:text-[31px]">{step.title}</h3>
                  <span
                    className="font-mono text-[9px] lg:hidden"
                    style={{ color: 'rgba(0,0,0,.4)' }}
                  >
                    {step.num}
                  </span>
                </div>
                <p
                  className="mt-[5px] max-w-[520px] text-[12.5px] leading-[1.65] lg:mt-[6px] lg:text-[13px]"
                  style={{ color: 'rgba(0,0,0,.58)', textWrap: 'pretty' }}
                >
                  <span className="lg:hidden">{step.bodyShort}</span>
                  <span className="hidden lg:inline">{step.body}</span>
                </p>
              </div>
              <span
                className="hidden self-center font-mono text-[10px] lg:block"
                style={{ letterSpacing: '.16em', color: 'rgba(0,0,0,.4)' }}
              >
                {step.num}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 hidden px-16 lg:block">
        <h2 className="eyebrow pb-6">WHAT I SHOOT</h2>
        <ul className="flex flex-wrap gap-[9px]">
          {WHAT_I_SHOOT.map((tag) => (
            <li
              key={tag}
              className="px-[17px] py-[10px] font-mono text-[10px]"
              style={{
                border: '1px solid rgba(0,0,0,.28)',
                letterSpacing: '.14em',
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <CtaPanel
        lines={['Come and say hello.', 'I’d like to hear about it.']}
        secondary={{ href: '/portfolio', label: 'SEE THE WORK →' }}
        variant="statement"
        footer="desktop-only"
      />
    </>
  );
}
