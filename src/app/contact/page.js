import Contact from '@/components/Contact';
import Recommendation from '@/components/Recommendation';

const Page = () => {
  return (
    <section className="h-full w-full bg-background">
      <div className="relative overflow-hidden border-b border-border px-4 py-4 font-heading text-heading sm:px-10 sm:py-6 lg:px-24 lg:py-8">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Contact</h2>
      </div>

      <Contact />
      <Recommendation />
    </section>
  );
};

export default Page;