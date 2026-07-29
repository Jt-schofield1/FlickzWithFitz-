/**
 * Page-load curtain. It wipes bottom-up, so the hero sits under it longest —
 * at the handoff's .8s the headline reveal finished almost entirely behind the
 * curtain and read as no animation at all. Trimmed to .6s (clear at ~.65s) so
 * the reveal underneath plays in the open; the H1 delays are tuned to match.
 */
export default function Intro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9000] flex flex-col items-center justify-center gap-[18px] bg-white"
      style={{ animation: 'introOut .6s .05s cubic-bezier(.76,0,.24,1) forwards' }}
    >
      <div
        style={{
          font: '800 22px/1 var(--font-sans)',
          fontStretch: '112%',
          letterSpacing: '.24em',
          animation: 'introWord .6s cubic-bezier(.16,1,.3,1) both',
        }}
      >
        FLICKZWITHFITZ
      </div>
      <div
        style={{
          width: 220,
          height: 1,
          background: '#000',
          transformOrigin: 'left',
          animation: 'introRule .7s cubic-bezier(.76,0,.24,1) both',
        }}
      />
      <div
        style={{
          font: '400 10px/1 var(--font-mono)',
          letterSpacing: '.24em',
          color: 'rgba(0,0,0,.45)',
          animation: 'rise .5s .2s both',
        }}
      >
        ERIE, PENNSYLVANIA
      </div>
    </div>
  );
}
