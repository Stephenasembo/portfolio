export default function ProjectCard({title, projectImg, description, stack}) {
  return (
    <div
    className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md cursor-pointer duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
    >
      <h3 className="text-lg my-2 font-medium">{title}</h3>
      <div
      className="lg:grid lg:grid-cols-[max-content_1fr] gap-[2rem]">
        <img
        src={projectImg}
        width={200}
        height={112}
        />
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
  )
}

