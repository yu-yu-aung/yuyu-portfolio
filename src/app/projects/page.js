import Projects from '@/components/Projects';

const Page = () => {
  return (
    <section className="bg-background">
      <div className="relative overflow-hidden px-4 py-4 text-heading font-heading sm:px-10 sm:py-6 lg:px-24 lg:py-8 border-b-1 border-border">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">What I've Built</h2>
      </div>
      <Projects />
    </section>
  );
};

export default Page;