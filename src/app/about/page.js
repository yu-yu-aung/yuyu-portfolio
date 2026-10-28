import AboutMe from '@/components/AboutMe';

const Page = () => {
  return (
    <section className="h-full w-full bg-background">
      <div className="relative overflow-hidden bg-primary px-4 py-4 text-primary-foreground sm:px-10 sm:py-6 lg:px-24 lg:py-8" id="about-me">
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">About Me</h2>
      </div>
      <AboutMe />
    </section>
  );
};

export default Page;