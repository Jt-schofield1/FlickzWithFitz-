import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Photo from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Booking 2026 — 2027. Send the basics and Cameron will come back within two days with availability and a proper quote.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div
      className="grid lg:min-h-screen"
      style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))' }}
    >
      <div className="min-w-0 px-5 pb-[100px] pt-[26px] lg:px-[clamp(24px,4.5vw,64px)] lg:pb-[90px] lg:pt-[110px]">
        <p className="eyebrow">BOOKING — 2026 / 2027</p>
        <h1 className="display mt-3 overflow-hidden text-[42px] leading-none tracking-[-.025em] lg:mt-[22px] lg:text-[clamp(48px,5vw,76px)] lg:tracking-[-.028em]">
          <span
            className="clip-line anim-clipup"
            style={{ animationDelay: '.5s', animationDuration: '1s' }}
          >
            Tell me about
          </span>
          <span
            className="clip-line anim-clipup italic"
            style={{ animationDelay: '.64s', animationDuration: '1s' }}
          >
            the day.
          </span>
        </h1>
        <p
          className="mt-[14px] max-w-[460px] text-[13px] leading-[1.6] lg:mt-[26px] lg:text-[14.5px] lg:leading-[1.65]"
          style={{ color: 'rgba(0,0,0,.62)', textWrap: 'pretty' }}
        >
          Dates go quickly for summer and early autumn. Send the basics and I&rsquo;ll come
          back within two days with availability and a proper quote.
        </p>

        <ContactForm />
      </div>

      {/* The handoff pinned this column (`sticky; top: 0`) so it would track a
          long form. In practice the page scrolls barely 400px, so it pinned from
          the first pixel and read as frozen — it scrolls with the page instead.
          Still capped rather than full-height: stretching it looked absurd, and
          default centring cut the couple's faces off. */}
      <div
        className="hidden self-start overflow-hidden bg-black lg:block"
        style={{ height: 'min(100vh, 620px)' }}
      >
        <Photo
          name="DSC01445"
          alt="First look"
          sizes="(min-width:1024px) 50vw, 100vw"
          priority
          className="anim-scz h-full w-full object-cover object-[50%_22%]"
        />
      </div>
    </div>
  );
}
