import Image from 'next/image';
import myPic from '../../public/img/me.webp';
import LinkedinIcon from './ui/linkedinIcon';
import Link from 'next/link';
import GitHubIcon from './ui/githubIcon';

const About = () => {
  return (
    <section id="about" className='pt-4'>
      <div className='relative flex items-center justify-between gap-8'>
        <div>
          <h1 className='mb-8'>Hi there,<br />I&apos;m <span className='text-accent'>Eva</span> Machová</h1>
          <p className='mb-4 lg:text-xl'>I am a <span className='font-semibold'>user-focused frontend developer </span>
            with strong background in <span className='font-semibold'>QA</span> and <span className='font-semibold'>UX/UI</span> design.</p>
          <p className='mb-4 lg:text-xl'>An advocate for clean, maintainable code, I enjoy
            making projects pretty not just on the outside. ✨</p>
        </div>
        <Image
          sizes='(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 18rem'
          className="hidden xs:block w-1/3 min-w-40 max-w-72" src={myPic} alt="Girl coding" />
      </div>
      <div className='flex gap-4 items-center'>
        <Link className='hover:text-accent text-xl' href="https://www.linkedin.com/in/eva-machova-frontend-developer/">
          <LinkedinIcon className='w-7 h-7 fill-white hover:fill-gray-400' />
        </Link>
        <Link href="https://github.com/EvaMach">
          <GitHubIcon className='fill-white hover:fill-gray-400 w-7 h-7' />
        </Link>
      </div>

      <h2 className='mt-12'>About</h2>
      <p className='mb-4 lg:text-lg text-justify'>My path to IT has not been conventional. Although I have a Master&apos;s degree in Linguistics and English Language, I&apos;ve always felt drawn to technology. As a result I decided to take a job as a tester and discovered that I really love collaborating on web apps that provide <span className='font-semibold'>quality and great user experience</span>. I explored UX/UI design for a while, conducting user interviews, usability testing, and creating prototypes. But soon, I realized that I want to be the one to code those designs - and so I dived headfirst into <span className='font-semibold'>frontend development.</span></p>
      <p className='mb-4 lg:text-lg text-justify'>I took the Czechitas Digital Academy intensive course in Web development which helped me transition into my current role as a frontend developer. Now, I enjoy <span className='font-semibold'>turning creative and impactful ideas into web applications.</span> I’m always eager to take on new challenges, explore latest technologies, and continue growing. 🚀</p>
    </section>
  );
};

export default About;
