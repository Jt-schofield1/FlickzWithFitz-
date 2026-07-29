import { dimsOf } from '@/data/photos';
import { MARQUEE, MARQUEE_MOBILE } from '@/data/content';

function Track({ names, height, gap }: { names: string[]; height: number; gap: number }) {
  const strip = (
    <div className="flex shrink-0" style={{ gap, padding: `${gap}px ${gap / 2}px` }}>
      {names.map((name) => {
        const { w, h } = dimsOf(name);
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={name}
            src={`/photos/${name}-400.webp`}
            alt=""
            width={Math.round(height * (w / h))}
            height={height}
            loading="lazy"
            decoding="async"
            className="object-cover"
            style={{ height, width: 'auto' }}
          />
        );
      })}
    </div>
  );

  return (
    <div className="anim-marquee flex w-max">
      {strip}
      {/* Duplicated once so the -50% translation loops seamlessly. */}
      {strip}
    </div>
  );
}

export default function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden lg:mt-[130px]">
      {/* Mobile butts straight up against the film and rules only underneath. */}
      <div
        className="hidden lg:block"
        style={{
          borderTop: '1px solid rgba(0,0,0,.13)',
          borderBottom: '1px solid rgba(0,0,0,.13)',
        }}
      >
        <Track names={MARQUEE} height={132} gap={12} />
      </div>
      <div className="lg:hidden" style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}>
        <Track names={MARQUEE_MOBILE} height={96} gap={8} />
      </div>
    </div>
  );
}
