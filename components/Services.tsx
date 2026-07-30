'use client';

import { useRef, useState } from 'react';
import {
  ADDITIONAL_SERVICES,
  PORTRAIT_PACKAGES,
  WEDDING_SERVICES,
  type Offering,
} from '@/data/content';

const TABS = [
  { id: 'wedding', label: 'WEDDING SERVICES' },
  { id: 'additional', label: 'ADDITIONAL SERVICES' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const RULE = '1px solid rgba(0,0,0,.14)';

export default function Services() {
  const [active, setActive] = useState<TabId>('wedding');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, as the tab pattern expects.
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (index + delta + TABS.length) % TABS.length;
    setActive(TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="mt-[36px] px-5 lg:mt-[120px] lg:px-16">
      <h2 className="eyebrow">SERVICES</h2>

      <div
        role="tablist"
        aria-label="Services"
        className="mt-4 flex flex-wrap gap-2 pb-[18px] lg:mt-6 lg:gap-[10px] lg:pb-[26px]"
        style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => setActive(tab.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className="chip flex min-h-[44px] items-center lg:min-h-0"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="panel-wedding"
        aria-labelledby="tab-wedding"
        hidden={active !== 'wedding'}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {WEDDING_SERVICES.map((service) => (
            <WeddingCard key={service.name} service={service} />
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id="panel-additional"
        aria-labelledby="tab-additional"
        hidden={active !== 'additional'}
      >
        <div
          className="grid gap-x-10 gap-y-8 pt-7 lg:gap-y-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))' }}
        >
          {ADDITIONAL_SERVICES.map((group) => (
            <div key={group.group}>
              <h3
                className="pb-3 font-mono text-[9px] lg:text-[10px]"
                style={{ letterSpacing: '.2em', color: 'rgba(0,0,0,.4)', borderBottom: RULE }}
              >
                {group.group.toUpperCase()}
              </h3>
              <ul className="mt-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="py-[7px] text-[13px] leading-[1.5] lg:text-[13.5px]"
                    style={{ color: 'rgba(0,0,0,.66)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="eyebrow mt-12 lg:mt-14">PORTRAIT SESSION PRICING</h3>
        <div className="mt-4 lg:mt-6" style={{ borderTop: RULE }}>
          {PORTRAIT_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="grid grid-cols-[1fr_auto] gap-6 py-[18px] lg:gap-[30px] lg:py-[22px]"
              style={{ borderBottom: RULE }}
            >
              <div>
                <h4 className="display text-2xl italic lg:text-[31px]">{pkg.name}</h4>
                <p
                  className="mt-[6px] text-[12.5px] leading-[1.6]"
                  style={{ color: 'rgba(0,0,0,.55)', textWrap: 'pretty' }}
                >
                  {pkg.detail}
                </p>
              </div>
              <div className="self-center font-mono text-[11px] lg:text-[13px]">{pkg.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WeddingCard({ service }: { service: Offering }) {
  return (
    <article className="pt-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="display text-[28px] leading-none lg:text-[36px]">{service.name}</h3>
        <p
          className="display whitespace-nowrap text-[15px] lg:text-[19px]"
          style={{ letterSpacing: '-.01em' }}
        >
          Starting at <span className="italic">$1,500</span>
        </p>
      </div>

      <p
        className="mt-4 text-[13px] leading-[1.7] lg:text-[14px]"
        style={{ color: 'rgba(0,0,0,.66)', textWrap: 'pretty' }}
      >
        {service.blurb}
      </p>

      <h4
        className="mt-7 pb-3 font-mono text-[9px] lg:text-[10px]"
        style={{ letterSpacing: '.2em', color: 'rgba(0,0,0,.4)', borderBottom: RULE }}
      >
        PACKAGE INCLUDES
      </h4>
      <ul>
        {service.includes.map((item) => (
          <li
            key={item}
            className="py-[9px] text-[12.5px] leading-[1.55] lg:text-[13px]"
            style={{ borderBottom: RULE, color: 'rgba(0,0,0,.66)', textWrap: 'pretty' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
