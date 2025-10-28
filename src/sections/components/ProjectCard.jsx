import { LinkArrow } from "./svgs";

export default function ProjectCard({projectLink, title, projectImg, description, stack, inDevelopment}) {
  return (
    <a
    href={`${projectLink}`}
    target="_blank" rel="noopener noreferrer"
    >
      <div
      className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md cursor-pointer duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
      >
        <div className="flex gap-2 items-center">
          <h3 className="text-lg my-2 font-medium">{title}</h3>
          <LinkArrow />
          {inDevelopment && <span className="development-badge">In development</span>}
        </div>
        <div
        className="md:grid md:grid-cols-[max-content_1fr] gap-[2rem]">
          <span className="rounded-lg flex items-center justify-center">
            <img
            src={projectImg}
            width={200}
            height={112}
            />
          </span>
          <div>
            <p>
              {description}
            </p>
            <ul className="list-none my-2 flex gap-2 flex-wrap">
              {stack.map((item) => (
                <li key={item}
                className="border-1 rounded-full px-2"
                >{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  )
}

