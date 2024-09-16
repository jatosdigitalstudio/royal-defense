import { Suspense } from 'react';
import Hero from '@/components/Pages/Hero';
import About from '@/components/Pages/About';
import Solution from '@/components/Pages/Solution';
import Team from '@/components/Pages/Team';
import Contact from '@/components/Pages/Contact';
import Loading from './loading';

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <About />
      <Solution />
      <Team />
      <Contact />
    </Suspense>
  );
}
