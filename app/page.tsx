import Feature from '@/components/(home)/feature/Feature';
import Hero from '@/components/(home)/hero/Hero';
import Stats from '@/components/(home)/stats/Stats';
import ArchRestoration from '@/components/(home)/arch/ArchRestoration';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Stats />
      <ArchRestoration />
    </main>
  );
}
