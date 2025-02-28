import Image from 'next/image';
import myPic from '../../public/img/me.webp';

const About = () => {
  return (
    <section id="about" className='pt-4'>
      <div className='relative flex items-center justify-between gap-8 mb-8'>
        <div>
          <h1 className='mb-8'>Hi there,<br />I&apos;m <span className='text-accent'>Eva</span> Machová</h1>
          <p className='mb-4 lg:text-lg'>I am a <span className='font-semibold'>user-focused frontend-developer </span>
            with strong background in <span className='font-semibold'>QA</span> and <span className='font-semibold'>UX/UI</span> design.</p>
          <p className='lg:text-lg'>An advocate for clean, maintainable code, I enjoy
            making projects pretty not just on the outside. ✨</p>
        </div>
        <Image
          sizes='(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 18rem'
          className="hidden xs:block w-1/3 min-w-40 max-w-72" src={myPic} alt="Girl coding" />
      </div>

      <h2>About</h2>
      <p className='lg:text-lg'>My journey to development was not direct and led me through interesting paths and stops on the way that make me the developer I am today.</p>
    </section>
  );
};

export default About;