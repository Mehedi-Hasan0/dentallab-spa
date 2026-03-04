/**
 * HeroGrid - A decorative background grid component.
 */
export function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 grid h-full w-full grid-cols-4 px-5 xl:px-10 2xl:px-20">
      <div className="h-full w-full border border-white/10" aria-hidden="true" />
      <div className="h-full w-full border border-white/10" aria-hidden="true" />
      <div className="h-full w-full border border-white/10" aria-hidden="true" />
      <div className="h-full w-full border border-white/10" aria-hidden="true" />
    </div>
  );
}
