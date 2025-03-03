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
          <p className='mb-4 lg:text-lg'>I am a <span className='font-semibold'>user-focused frontend-developer </span>
            with strong background in <span className='font-semibold'>QA</span> and <span className='font-semibold'>UX/UI</span> design.</p>
          <p className='lg:text-lg'>An advocate for clean, maintainable code, I enjoy
            making projects pretty not just on the outside. ✨</p>
        </div>
        <Image
          sizes='(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 18rem'
          className="hidden xs:block w-1/3 min-w-40 max-w-72" src={myPic} alt="Girl coding" />
      </div>
      <div className='flex gap-4 items-center mt-2'>
        <Link className='hover:text-accent text-xl' href="https://www.linkedin.com/in/eva-machova-frontend-developer/">
          <LinkedinIcon className='w-8 h-8 fill-white hover:fill-gray-400' />
        </Link>
        <Link href="https://github.com/EvaMach">
          <GitHubIcon className='fill-white hover:fill-gray-400 w-8 h-8' />
        </Link>
      </div>

      <h2 className='mt-8'>About</h2>
      <p className='mb-4 lg:text-lg'>My path to IT has not been conventional. Although I have a Master&apos;s degree in Linguistics and English Language, I&apos;ve always felt a strong pull towards IT. After graduation I started working in QA, where I discovered my passion for ensuring quality and enhancing user experience in web applications. I dabbled in UX/UI design for a while, conducted user interviews and testing as well as creating wireframes and prototypes. But soon, I realized that I want to bring those designs to life myself - and so I took the plunge into frontend development.</p>
      <p className='mb-4 lg:text-lg'>I took the Czechitas Digital Academy intensive course in Web development which helped me transition into my current role as a Frontend Developer. Now, I’m thrilled to transform creative, impactful ideas into functional and user-friendly web applications. I’m always eager to take on new challenges, explore new technologies, and continue growing in this ever-evolving field. 🚀</p>
    </section>
  );
};

export default About;