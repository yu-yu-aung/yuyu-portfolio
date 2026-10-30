import React from 'react';

const Recommendation = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-lg border border-border bg-card/80 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sepia-black-100 via-background to-card p-6 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(39,89,255,0.14),_transparent_55%)]" aria-hidden="true" />

            <div className="relative flex h-full items-center justify-center py-8">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-brand/70 shadow-[0_20px_50px_rgba(39,89,255,0.18)] sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                <img 
                  src="/yuyu_high_reso.png" 
                  alt="Yu Yu Portrait" 
                  className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Why work with me
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Bridging engineering, design, and AI.
            </h3>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I build full-stack web applications, design intuitive user experiences,
              and explore AI-driven solutions. With a multidisciplinary background,
              I approach challenges through both technical thinking and creative problem-solving.
            </p>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I value clean architecture, continuous improvement, and turning complex
              ideas into practical products that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;