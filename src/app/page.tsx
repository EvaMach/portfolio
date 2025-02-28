import Contact from '@/components/Contact';
import About from '../components/About';
import Work from '../components/Work';

export default function Home() {
  return (
    <main className='grid gap-16'>
      <About />
      <Work />
      <Contact />
    </main>
  );
}
