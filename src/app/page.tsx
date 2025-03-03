import Contact from '@/components/Contact';
import About from '../components/About';
import Work from '../components/Work';

export default function Home() {
  return (
    <main className='grid gap-16 align-items-center mx-5 sm:mx-10 md:mx-[15%]'>
      <About />
      <Work />
      <Contact />
    </main>
  );
}
