import Image from "next/image";
import myPic from "../../public/img/me.webp";
import LinkedinIcon from "./ui/linkedinIcon";
import Link from "next/link";
import GitHubIcon from "./ui/githubIcon";

const About = () => {
  return (
    <section id="about" className="pt-4">
      <div className="relative flex items-center justify-between gap-8">
        <div>
          <h1 className="mb-8">
            Hi there,
            <br />
            I&apos;m <span className="text-accent">Eva</span> Machová,
          </h1>
          <p className="mb-4 lg:text-xl">
            a <span className="font-semibold">frontend developer </span>
            with background in <span className="font-semibold">
              QA
            </span> and <span className="font-semibold">UX/UI design</span>.
          </p>
          <p className="mb-4 lg:text-xl">
            I like building things that make you say{" "}
            <span className="italic">&quot;oh, that&apos;s cool&quot;</span>{" "}
            whether you&apos;re a user or a fellow developer. ✨
          </p>
        </div>
        <Image
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 18rem"
          className="hidden xs:block w-1/3 min-w-40 max-w-72"
          src={myPic}
          alt="Girl coding"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Link
          className="hover:text-accent text-xl"
          href="https://www.linkedin.com/in/eva-machova-frontend-developer/"
        >
          <LinkedinIcon className="w-7 h-7 fill-white hover:fill-gray-400" />
        </Link>
        <Link href="https://github.com/EvaMach">
          <GitHubIcon className="fill-white hover:fill-gray-400 w-7 h-7" />
        </Link>
      </div>

      <h2 className="mt-12">About</h2>
      <p className="mb-4 lg:text-lg text-justify">
        My tech journey has taken me from testing (manual and automated),
        through UX/UI design, to frontend development with a period in a dev
        team lead role along the way. Yes, I do like a challenge. 😅
      </p>
      <p className="mb-4 lg:text-lg text-justify">
        In my daily work, I care about clean, maintainable code and like leaving
        things better than I found them. I enjoy collaborating, reviewing code,
        and exploring new technologies - lately Python and React Native.
      </p>
      <p className="mb-4 lg:text-lg text-justify">
        Over the past few years, I&apos;ve worked with teams on a range of
        projects, always focusing on usability, performance, and great user{" "}
        <span className="italic">and</span> developer experience. 🚀
      </p>
    </section>
  );
};

export default About;
