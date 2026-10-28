import React from 'react';

const Recommendation = () => {
  return (
    <section className="relative my-8 overflow-hidden py-8 text-foreground sm:my-12 sm:py-12">
      <img
        src="/gradient.png"
        alt="blue gradient image"
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-auto select-none object-cover object-top"
      />
      <div className="relative z-10 flex flex-col items-center justify-between lg:grid lg:grid-cols-5">
        <h3 className="mb-10 text-center text-3xl font-bold italic tracking-tight sm:col-span-full sm:text-5xl">
          Why hire me?
        </h3>

        <div className="lg:col-span-2 lg:my-auto lg:ml-auto lg:mr-12 lg:pl-24">
          <div className="h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-brand sm:h-[200px] sm:w-[200px] sm:border-6 lg:h-[300px] lg:w-[300px]">
            <img src="/yuyu_high_reso.png" alt="Yu Yu Portrait" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 px-4 py-2 sm:px-8 lg:col-span-3 lg:items-start lg:gap-4 lg:pr-24">
          <p className="mb-2 text-sm font-medium italic sm:mb-4 sm:text-xl lg:text-start">
            I am passionate about programming.
          </p>

          <p className="mb-2 text-center text-sm font-medium italic sm:mb-4 sm:text-xl lg:text-start">
            I transitioned into computer science while working full-time as a Chinese translator, teaching myself frontend development and UI/UX design.<br /> This journey strengthened my resilience, adaptability, and eagerness to learn.
          </p>

          <p className="text-center text-sm font-medium italic sm:text-xl lg:text-start">
            I’m eager to bring my skills, creativity, and dedication to build impactful, user-centered products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;