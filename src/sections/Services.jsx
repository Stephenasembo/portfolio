export default function Services() {
  return (
    <div className="relative mb-12">
      <div className="sticky top-0 background-white">
        <h2 className="text-2xl my-4 font-semibold bg-slate-200/90 backdrop-blur-md border-b border-slate-300/50 py-2">SERVICES</h2>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">Frontend development</h3>
          <p>
            I build responsive, accessible and visually appealing interfaces that bring ideas to life across all screen sizes.
          </p>
          <div className="my-2 flex gap-2 flex-wrap">
            <span className="border-1 rounded-full px-2">HTML</span>
            <span className="border-1 rounded-full px-2">CSS</span>
            <span className="border-1 rounded-full px-2">React</span>
            <span className="border-1 rounded-full px-2">Webpack</span>
          </div>
        </div>
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">Backend development</h3>
          <p>
            I develop robust and scalable server-side logic and APIs with efficient database integration and secure authentication systems.
          </p>
          <div className="my-2 flex gap-2 flex-wrap">
            <span className="border-1 rounded-full px-2">JavaScript</span>
            <span className="border-1 rounded-full px-2">Expressjs</span>
            <span className="border-1 rounded-full px-2">Nodejs</span>
            <span className="border-1 rounded-full px-2">PostgreSQL</span>
            <span className="border-1 rounded-full px-2">Prisma</span>
          </div>
        </div>
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">Task automation</h3>
          <p>
            I automate repetitive workflows with custom scripts to save time, reduce errors and boost productivity.
          </p>
          <div className="my-2 flex gap-2 flex-wrap">
            <span className="border-1 rounded-full px-2">Python</span>
            <span className="border-1 rounded-full px-2">JavaScript</span>
          </div>
        </div>
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">Automated bots</h3>
          <p>
            I design smart bots that automate tasks, interact with users and connect with different services.
          </p>
          <div className="my-2 flex gap-2 flex-wrap">
            <span className="border-1 rounded-full px-2">Python</span>
            <span className="border-1 rounded-full px-2">JavaScript</span>
            <span className="border-1 rounded-full px-2">Telegram API</span>
          </div>
        </div>
      </div>
    </div>
  )
}