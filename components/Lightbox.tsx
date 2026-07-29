'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { PHOTOS, PHOTO_COUNT } from '@/data/photos';

const COMMIT_PX = 70;
const SETTLE = 'transform .45s cubic-bezier(.16,1,.3,1)';

type Ctx = { open: (index: number) => void };

const LightboxContext = createContext<Ctx | null>(null);

export function useLightbox(): Ctx {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used inside <LightboxProvider>');
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = useCallback((i: number) => setIndex(i), []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <Lightbox index={index} onIndex={setIndex} />
    </LightboxContext.Provider>
  );
}

function Lightbox({
  index,
  onIndex,
}: {
  index: number | null;
  onIndex: (i: number | null) => void;
}) {
  const isOpen = index !== null;
  const imgRef = useRef<HTMLImageElement>(null);
  const startX = useRef(0);
  const offset = useRef(0);
  const dragging = useRef(false);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const step = useCallback(
    (delta: number) => {
      onIndex(index === null ? null : (index + delta + PHOTO_COUNT) % PHOTO_COUNT);
    },
    [index, onIndex]
  );

  const close = useCallback(() => onIndex(null), [onIndex]);

  // Reset the drag offset whenever the displayed image changes.
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    offset.current = 0;
    el.style.transition = SETTLE;
    el.style.transform = 'translateX(0px)';
  }, [index]);

  useEffect(() => {
    if (!isOpen) return;

    restoreFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const { style } = document.documentElement;
    const prev = style.overflow;
    style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      style.overflow = prev;
      restoreFocus.current?.focus();
    };
  }, [isOpen, close, step]);

  // Pointer offset is written straight to the node — routing it through React
  // state made the drag visibly lag behind the finger.
  const write = (x: number, transition: string) => {
    const el = imgRef.current;
    if (!el) return;
    el.style.transition = transition;
    el.style.transform = `translateX(${x}px)`;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!isOpen) return;
    startX.current = e.clientX;
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    offset.current = e.clientX - startX.current;
    write(offset.current, 'none');
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const dx = offset.current;
    if (dx < -COMMIT_PX) step(1);
    else if (dx > COMMIT_PX) step(-1);
    else write(0, SETTLE);
  };

  const photo = index === null ? null : PHOTOS[index];
  const label = photo
    ? `${String(photo.i + 1).padStart(3, '0')} / ${String(PHOTO_COUNT).padStart(3, '0')} — ${photo.title.toUpperCase()} · ${photo.cat.toUpperCase()}`
    : '';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo ? `${photo.title}, ${photo.cat}` : 'Photo viewer'}
      aria-hidden={!isOpen}
      className="fixed inset-0 z-[7000] flex flex-col transition-opacity duration-[350ms]"
      style={{
        background: 'rgba(255,255,255,.97)',
        backdropFilter: 'blur(8px)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <div
        className="flex items-center justify-between px-[26px] py-5"
        style={{ borderBottom: '1px solid rgba(0,0,0,.1)' }}
      >
        <span
          className="font-mono"
          style={{ fontSize: 10, letterSpacing: '.18em', color: 'rgba(0,0,0,.5)' }}
        >
          {label}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="font-mono"
          style={{ fontSize: 10, letterSpacing: '.18em' }}
        >
          CLOSE ✕
        </button>
      </div>

      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex flex-1 cursor-grab items-center justify-center overflow-hidden px-[26px] pb-[10px] pt-[26px]"
        style={{ touchAction: 'pan-y' }}
      >
        {photo && (
          <picture>
            <source
              type="image/webp"
              srcSet={`/photos/${photo.name}-800.webp 800w, /photos/${photo.name}-1400.webp 1400w`}
              sizes="100vw"
            />
            <img
              ref={imgRef}
              src={`/photos/${photo.name}.jpg`}
              alt={`${photo.title} — ${photo.cat}`}
              width={photo.w}
              height={photo.h}
              draggable={false}
              className="max-h-full w-auto max-w-full select-none object-contain"
              style={{ transition: SETTLE }}
            />
          </picture>
        )}
      </div>

      <div className="flex items-center justify-between px-[26px] pb-[22px] pt-[14px]">
        <button
          type="button"
          onClick={() => step(-1)}
          className="py-[10px] font-mono"
          style={{ fontSize: 10, letterSpacing: '.18em' }}
        >
          ← PREV
        </button>
        <span
          className="font-mono"
          style={{ fontSize: 10, letterSpacing: '.16em', color: 'rgba(0,0,0,.42)' }}
        >
          DRAG, SWIPE OR USE ← →
        </span>
        <button
          type="button"
          onClick={() => step(1)}
          className="py-[10px] font-mono"
          style={{ fontSize: 10, letterSpacing: '.18em' }}
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
