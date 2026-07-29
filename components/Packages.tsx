import { PORTRAIT_PACKAGES, WEDDING_PACKAGES, type Package } from '@/data/content';

const RULE = '1px solid rgba(0,0,0,.14)';

function Badge() {
  return (
    <span
      className="ml-2 border border-black px-[6px] py-[3px] align-middle font-mono not-italic"
      style={{ fontSize: 9, letterSpacing: '.16em' }}
    >
      POPULAR
    </span>
  );
}

function Row({ pkg, italic }: { pkg: Package; italic?: boolean }) {
  return (
    <div
      className="grid gap-[30px] py-[22px]"
      style={{
        gridTemplateColumns: pkg.price ? '1fr auto' : '1fr',
        borderBottom: RULE,
      }}
    >
      <div>
        <h3 className={`display text-[31px] ${italic ? 'italic' : ''}`}>
          {pkg.name}
          {pkg.popular && <Badge />}
        </h3>
        <p
          className="mt-[6px]"
          style={{
            font: '400 12.5px/1.6 var(--font-sans)',
            color: 'rgba(0,0,0,.55)',
            textWrap: 'pretty',
          }}
        >
          {pkg.detail}
        </p>
      </div>
      {pkg.price && (
        <div className="self-center font-mono text-[13px]">{pkg.price}</div>
      )}
    </div>
  );
}

function CompactRow({ label, price }: { label: string; price?: string }) {
  return (
    <div
      className="flex items-baseline justify-between py-[14px]"
      style={{ borderBottom: RULE }}
    >
      <span className={`display text-2xl ${price ? 'italic' : ''}`}>{label}</span>
      {price && <span className="font-mono text-[11px]">{price}</span>}
    </div>
  );
}

export default function Packages() {
  return (
    <section className="mt-[36px] px-5 lg:mt-[120px] lg:px-16">
      {/* ------------------------------------------------------- desktop --- */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="eyebrow">PACKAGES — WEDDINGS</h2>
          <p className="display text-[22px]" style={{ letterSpacing: '-.01em' }}>
            Starting at <span className="italic">$1,500</span>
          </p>
        </div>
        <div className="mt-6" style={{ borderTop: RULE }}>
          {WEDDING_PACKAGES.map((p) => (
            <Row key={p.name} pkg={p} />
          ))}
        </div>

        <h2 className="eyebrow mt-14">PACKAGES — PORTRAITS</h2>
        <div className="mt-6" style={{ borderTop: RULE }}>
          {PORTRAIT_PACKAGES.map((p) => (
            <Row key={p.name} pkg={p} italic />
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------- mobile --- */}
      <div className="lg:hidden">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="eyebrow">WEDDINGS</h2>
          <p className="display text-[17px]">
            from <span className="italic">$1,500</span>
          </p>
        </div>
        <div className="mt-[14px]" style={{ borderTop: RULE }}>
          {WEDDING_PACKAGES.map((p) => (
            <CompactRow key={p.name} label={p.name} />
          ))}
        </div>

        <h2 className="eyebrow mt-[26px]">PORTRAITS</h2>
        <div className="mt-[14px]" style={{ borderTop: RULE }}>
          {PORTRAIT_PACKAGES.map((p) => (
            <CompactRow key={p.name} label={p.short} price={p.price} />
          ))}
        </div>
      </div>
    </section>
  );
}
