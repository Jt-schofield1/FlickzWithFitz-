import { dimsOf } from '@/data/photos';

const WIDTHS = [400, 800, 1400];

type Props = {
  /** Basename in /public/photos, without extension. */
  name: string;
  alt: string;
  sizes: string;
  className?: string;
  /** Above-the-fold images opt out of lazy loading. */
  priority?: boolean;
  draggable?: boolean;
  'data-i'?: number;
};

/**
 * Every gallery photo ships as three WebP widths with a JPEG fallback.
 * Intrinsic dimensions come from the build step so nothing shifts on load.
 */
export default function Photo({
  name,
  alt,
  sizes,
  className,
  priority = false,
  draggable,
  'data-i': dataI,
}: Props) {
  const { w, h } = dimsOf(name);
  const srcSet = WIDTHS.map((width) => `/photos/${name}-${width}.webp ${width}w`).join(', ');

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={`/photos/${name}.jpg`}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        draggable={draggable}
        data-i={dataI}
      />
    </picture>
  );
}
