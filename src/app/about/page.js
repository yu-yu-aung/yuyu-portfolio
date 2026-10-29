import AboutMe from '@/components/AboutMe';

const Page = () => {
  return (
    <section className="h-full w-full bg-background">
      <div className="relative overflow-hidden px-4 py-4 text-heading font-heading sm:px-10 sm:py-6 lg:px-24 lg:py-8 border-b-1 border-border">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">About Me</h2>
      </div>
      <AboutMe />
    </section>
  );
};

export default Page;