import Projects from '@/components/Projects';

const Page = () => {
  return (
    <section className="bg-background">
      <div className="relative overflow-hidden bg-primary px-4 py-4 text-primary-foreground sm:px-10 sm:py-6 lg:px-24 lg:py-8" id="about-me">
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">What I Built</h2>
      </div>
      <Projects />
    </section>
  );
};

export default Page;