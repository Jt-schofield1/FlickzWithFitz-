'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Photo from '@/components/Photo';
import { useLightbox } from '@/components/Lightbox';
import { CATEGORIES, byCategory, type Category } from '@/data/photos';

type Filter = Category | 'all';

const FILTERS: Filter[] = ['all', 'Weddings', 'Portraits', 'Details', 'Places', 'Pets'];

function isCategory(value: string | null): value is Category {
  return CATEGORIES.some((c) => c.name === value);
}

export default function Gallery() {
  const params = useSearchParams();
  const requested = params.get('c');
  const [filter, setFilter] = useState<Filter>(isCategory(requested) ? requested : 'all');
  const { open } = useLightbox();

  return (
    <>
      <div
        role="group"
        aria-label="Filter by category"
        className="hsnap mt-5 gap-2 px-5 pb-[14px] lg:mt-10 lg:flex-wrap lg:gap-[10px] lg:overflow-x-visible lg:px-16 lg:pb-[26px]"
        style={{ borderBottom: '1px solid rgba(0,0,0,.13)' }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className="chip flex min-h-[44px] shrink-0 items-center lg:min-h-0"
          >
            {f === 'all' ? 'ALL' : f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="pb-[90px] lg:px-16 lg:pb-[100px] lg:pt-10">
        {CATEGORIES.filter((c) => filter === 'all' || filter === c.name).map((c) => (
          <section key={c.name} className="lg:mb-[50px]">
            <h2
              className="px-5 pb-[10px] pt-[18px] font-mono text-[9px] lg:mb-5 lg:px-0 lg:pb-0 lg:pt-0 lg:text-[10px]"
              style={{ letterSpacing: '.2em', color: 'rgba(0,0,0,.4)' }}
            >
              {c.name.toUpperCase()}
            </h2>
            <div className="masonry px-[6px] lg:px-0">
              {byCategory(c.name).map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => open(p.i)}
                  aria-label={`Enlarge ${p.title}`}
                  className="block w-full"
                >
                  <Photo
                    name={p.name}
                    alt={p.title}
                    sizes="(min-width:1024px) 320px, 50vw"
                    className="grid-photo"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
