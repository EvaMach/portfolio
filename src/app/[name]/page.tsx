import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: { name: string; };
}

export default function ProjectDetailPage({ params }: Params) {
  const project = projects.find((p) => p.name === params.name);

  if (!project) {
    notFound(); // Returns a 404 page if the ID is not found
  }

  return (
    <div className="mx-5 sm:mx-10 md:mx-[15%] text-lg mb-12">
      <Link href="/" className="text-accent">
        ← Back to Projects
      </Link>
      <div className="ml-8">
        <h2 className="my-4">{project.name}</h2>
        <div className="grid gap-2 border-b-2 pb-4 border-accent mb-4">
          <div><span className="text-gray-300 font-semibold">Roles: </span>{project.roles}</div>
          <div><span className="text-gray-300 font-semibold">Team size: </span>{project.team}</div>
          <div><span className="text-gray-300 font-semibold">Tech stack: </span>{project.techStack.map((tech, index) => <span key={index}>{tech}, </span>)}</div>
          <div><span className="text-gray-300 font-semibold">Frameworks & Libraries: </span>{project.libs.map((lib, index) => <span key={index}>{lib}, </span>)}</div>
          <div><span className="text-gray-300 font-semibold">Tools: </span>{project.tools.map((tool, index) => <span key={index}>{tool}, </span>)}</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="mt-2 text-justify">{project.longDescription[0]}</p>
          <Image className="rounded-lg max-w-lg" src={project.image} alt={`${project.name} app screenshot`} />
          <p className="mt-2 text-justify">{project.longDescription[1]}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-4">Contributions and proud moments 💫</h3>
          <ul className="list-disc marker:accent pl-4 space-y-2">
            {project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
