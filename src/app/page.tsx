import Contact from '@/components/Contact';
import About from '../components/About';
import Work from '../components/Work';

export default function Home() {
  return (
    <main className='grid gap-8 align-items-center mb-8 mx-5 sm:mx-10 md:mx-[15%]'>
      <About />
      <Work />
      <Contact />
    </main>
  );
}
