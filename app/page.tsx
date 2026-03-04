import dynamic from 'next/dynamic';
import Hero from '@/components/(home)/hero/Hero';
import Feature from '@/components/(home)/feature/Feature';
import Stats from '@/components/(home)/stats/Stats';
import ArchRestoration from '@/components/(home)/arch/ArchRestoration';

const AboutUs = dynamic(() => import('@/components/(home)/aboutUs/AboutUs'));
const Products = dynamic(() => import('@/components/(home)/products/Products'));
const Contact = dynamic(() => import('@/components/(home)/contact/Contact'));
const Testimonials = dynamic(() => import('@/components/(home)/testimonial/Testimonials'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Stats />
      <ArchRestoration />
      <AboutUs />
      <Products />
      <Contact />
      <Testimonials />
    </main>
  );
}
