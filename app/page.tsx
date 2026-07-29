import Link from 'next/link';
import CategoryIndex from '@/components/CategoryIndex';
import CtaPanel from '@/components/CtaPanel';
import Film from '@/components/Film';
import Marquee from '@/components/Marquee';
import MobileCarousel from '@/components/MobileCarousel';
import Packages from '@/components/Packages';
import Photo from '@/components/Photo';
import { Drift, Parallax, PinnedStatement } from '@/components/Scroll';
import Testimonials from '@/components/Testimonials';
import { HOME_LEDE, HOME_LEDE_MOBILE } from '@/data/content';
import { CATEGORIES } from '@/data/photos';

const CONTENT_W = '(min-width:1024px) calc(100vw - 450px), 100vw';
const HALF_W = '(min-width:1024px) calc((100vw - 494px) / 2), 100vw';

export default function HomePage() {
  return (
    <>
      {/* ============================================================ hero === */}
      <section className="px-5 pt-[30px] lg:px-16 lg:pt-[120px]">
        <p className="eyebrow anim-rise" style={{ animationDelay: '.34s' }}>
          <span className="lg:hidden">SELECTED WORK</span>
          <span className="hidden lg:inline">SELECTED WORK — ERIE, PA</span>
        </p>

        <h1
          className="display mt-[14px] overflow-hidden lg:mt-6"
          style={{ letterSpacing: '-.025em', textWrap: 'balance' }}
        >
          <span className="block text-[46px] leading-[.98] lg:hidden">
            <span className="clip-line anim-clipup" style={{ animationDelay: '.4s' }}>
              Quiet pictures
            </span>
            <span
              className="clip-line anim-clipup italic"
              style={{ animationDelay: '.54s' }}
            >
              of loud days.
            </span>
          </span>
          <span
            className="hidden lg:block"
            style={{
              fontSize: 'clamp(56px,6.4vw,96px)',
              lineHeight: 0.98,
              letterSpacing: '-.028em',
            }}
          >
            <span className="clip-line anim-clipup" style={{ animationDelay: '.44s' }}>
              Quiet pictures of
            </span>
            <span
              className="clip-line anim-clipup italic"
              style={{ animationDelay: '.58s' }}
            >
              very loud days.
            </span>
          </span>
        </h1>

        <p
          className="anim-rise mt-[15px] lg:hidden"
          style={{
            font: '400 13px/1.6 var(--font-sans)',
            color: 'rgba(0,0,0,.62)',
            animationDelay: '.78s',
          }}
        >
          {HOME_LEDE_MOBILE}
        </p>

        <div
          className="anim-rise mt-[46px] hidden items-end justify-between pb-5 lg:flex"
          style={{
            borderBottom: '1px solid rgba(0,0,0,.13)',
            animationDelay: '.78s',
          }}
        >
          <p
            className="max-w-[440px]"
            style={{
              font: '400 14.5px/1.6 var(--font-sans)',
              color: 'rgba(0,0,0,.65)',
              textWrap: 'pretty',
            }}
          >
            {HOME_LEDE}
          </p>
          <span
            className="flex-none whitespace-nowrap font-mono text-[10px]"
            style={{ letterSpacing: '.2em', color: 'rgba(0,0,0,.4)' }}
          >
            SCROLL ↓
          </span>
        </div>
      </section>

      {/* ------------------------------------------------ mobile: carousel --- */}
      <div className="lg:hidden">
        <MobileCarousel />
      </div>

      {/* ------------------------------------------ desktop: lead + drift --- */}
      <div className="hidden lg:block">
        <figure className="mt-[78px] px-16">
          <Parallax aspect="3/2">
            <Photo
              name="DSC01420"
              alt="Lakeside ceremony aisle"
              sizes={CONTENT_W}
              priority
              className="h-full w-full object-cover"
            />
          </Parallax>
          <figcaption className="meta mt-3 flex justify-between">
            <span>001 — LAKESIDE CEREMONY</span>
            <span>ERIE, PA</span>
          </figcaption>
        </figure>

        <div className="mt-[130px] grid grid-cols-2 items-start gap-11 px-16">
          <Drift>
            <figure>
              <div className="overflow-hidden" style={{ aspectRatio: '2/3' }}>
                <Photo
                  name="kellywedding2-0191"
                  alt="The gown"
                  sizes={HALF_W}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="meta mt-3">002 — THE DRESS</figcaption>
            </figure>
          </Drift>
          <Drift reverse className="mt-[130px]">
            <figure>
              <div className="overflow-hidden" style={{ aspectRatio: '2/3' }}>
                <Photo
                  name="DSC01445"
                  alt="First look"
                  sizes={HALF_W}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="meta mt-3">003 — FIRST LOOK</figcaption>
            </figure>
          </Drift>
        </div>

        {/* -------------------------------------------- pinned statement --- */}
        <div className="mt-[150px]">
          <PinnedStatement
            image={
              <Photo
                name="DSC01472"
                alt="Kiss beneath the veil"
                sizes="(min-width:1024px) calc(100vw - 322px), 100vw"
                className="h-full w-full object-cover"
              />
            }
          >
            <p
              className="display"
              style={{
                fontSize: 'clamp(40px,4.6vw,68px)',
                lineHeight: 1.08,
                letterSpacing: '-.02em',
              }}
            >
              No posing.
              <br />
              <span className="italic">No cheese.</span>
            </p>
          </PinnedStatement>
        </div>
      </div>

      {/* ------------------------------------------- mobile: the work list --- */}
      <nav className="mt-10 px-5 lg:hidden" aria-label="Work by category">
        <h2
          className="eyebrow pb-3"
          style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}
        >
          THE WORK
        </h2>
        {CATEGORIES.map((c) => (
          <Link
            key={c.name}
            href={`/portfolio?c=${c.name}`}
            className="flex min-h-[48px] items-center justify-between py-4"
            style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}
          >
            <span className="display text-[30px] leading-none">{c.name}</span>
            <span
              className="font-mono text-[9px]"
              style={{ letterSpacing: '.14em', color: 'rgba(0,0,0,.4)' }}
            >
              {c.count} FRAMES →
            </span>
          </Link>
        ))}
      </nav>

      {/* ============================================================ film === */}
      <section className="mt-[42px] lg:mt-0 lg:px-16">
        <div
          className="hidden items-baseline justify-between py-[22px] lg:flex"
          style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}
        >
          <h2
            className="font-mono text-[10px]"
            style={{ letterSpacing: '.2em', color: 'rgba(0,0,0,.42)' }}
          >
            THE FILM
          </h2>
          <span
            className="font-mono text-[10px]"
            style={{ letterSpacing: '.2em', color: 'rgba(0,0,0,.42)' }}
          >
            CEREMONY / V1
          </span>
        </div>
        <div className="hidden lg:block lg:mt-5">
          <Film
            aspect="16/9"
            labelInset={{ left: 22, bottom: 20, size: 10, tracking: '.2em' }}
          />
        </div>
        <div className="lg:hidden">
          <Film
            aspect="9/13"
            labelInset={{ left: 16, bottom: 16, size: 9, tracking: '.18em' }}
          />
        </div>
      </section>

      {/* --------------------------------------- desktop: category index --- */}
      <div className="hidden lg:block">
        <CategoryIndex />
      </div>

      <Marquee />
      <Testimonials />
      <Packages />
      <CtaPanel lines={["Let's get your", 'date down.']} />
    </>
  );
}
