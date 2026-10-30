import React from 'react';

const highlights = ['Frontend development', 'UI/UX thinking', 'Product mindset'];

const Recommendation = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[30px] border border-border bg-card/80 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sepia-black-100 via-background to-card p-6 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,89,255,0.14),_transparent_55%)]" aria-hidden="true" />
            <div className="relative flex h-full items-center justify-center py-8">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-brand/70 shadow-[0_20px_50px_rgba(39,89,255,0.18)] sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                <img src="/yuyu_high_reso.png" alt="Yu Yu Portrait" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Why hire me
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              I build thoughtful digital experiences.
            </h3>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I transitioned into computer science while working full-time as a Chinese translator, teaching myself frontend development and UI/UX design. That journey strengthened my resilience, adaptability, and willingness to learn quickly.
            </p>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I&apos;m eager to bring my creativity, technical foundation, and product-minded approach to build meaningful experiences that help people and businesses move forward.
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;