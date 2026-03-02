import Feature from '@/components/(home)/feature/Feature';
import Hero from '@/components/(home)/hero/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <div className="min-h-[300vh]"></div>
    </main>
  );
}
