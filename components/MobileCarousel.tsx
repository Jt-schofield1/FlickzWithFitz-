'use client';

import Photo from '@/components/Photo';
import { useLightbox } from '@/components/Lightbox';
import { MOBILE_CAROUSEL } from '@/data/content';
import { PHOTOS } from '@/data/photos';

/** Swipe-first replacement for the desktop lead image and drifting pair. */
export default function MobileCarousel() {
  const { open } = useLightbox();

  return (
    <>
      <ul className="hsnap mt-[26px] gap-[10px] px-5 pb-3">
        {MOBILE_CAROUSEL.map((i) => {
          const photo = PHOTOS[i];
          return (
            <li key={photo.name} className="shrink-0" style={{ scrollSnapAlign: 'center' }}>
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`Enlarge ${photo.title}`}
                className="block h-[390px] w-[290px] overflow-hidden"
              >
                <Photo
                  name={photo.name}
                  alt={photo.title}
                  sizes="290px"
                  priority={i === MOBILE_CAROUSEL[0]}
                  className="h-full w-full object-cover"
                />
              </button>
            </li>
          );
        })}
      </ul>
      <p
        className="px-5 font-mono text-[9px]"
        style={{ letterSpacing: '.16em', color: 'rgba(0,0,0,.38)' }}
      >
        SWIPE — TAP TO ENLARGE
      </p>
    </>
  );
}
