export default function Services() {
  return (
    <div className="relative mb-12">
      <div className="sticky top-0 background-white">
        <h2 className="text-xl my-4 font-semibold">SERVICES</h2>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div>
          <h3 className="text-lg my-2">Front end web development</h3>
          <p>
            I build responsive, accessible and visually appealing interfaces that bring ideas to life across all screen sizes.
          </p>
          <div className="my-2 flex gap-2">
            <span className="border-1 rounded-full px-2">HTML</span>
            <span className="border-1 rounded-full px-2">CSS</span>
            <span className="border-1 rounded-full px-2">React</span>
            <span className="border-1 rounded-full px-2">Webpack</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg my-2">Back end web development</h3>
          <p>
            I develop robust and scalable server-side logic and APIs with efficient database integration and secure authentication systems.
          </p>
          <div className="my-2 flex gap-2">
            <span className="border-1 rounded-full px-2">JavaScript</span>
            <span className="border-1 rounded-full px-2">Expressjs</span>
            <span className="border-1 rounded-full px-2">Nodejs</span>
            <span className="border-1 rounded-full px-2">PostgreSQL</span>
            <span className="border-1 rounded-full px-2">Prisma</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg my-2">Task automation</h3>
          <p>
            I automate repetitive workflows with custom scripts to save time, reduce errors and boost productivity.
          </p>
          <div className="my-2 flex gap-2">
            <span className="border-1 rounded-full px-2">Python</span>
            <span className="border-1 rounded-full px-2">JavaScript</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg my-2">Automated bots</h3>
          <p>
            I design smart bots that automate tasks, interact with users and connect with different services.
          </p>
          <div className="my-2 flex gap-2">
            <span className="border-1 rounded-full px-2">Python</span>
            <span className="border-1 rounded-full px-2">JavaScript</span>
            <span className="border-1 rounded-full px-2">Telegram API</span>
          </div>
        </div>
      </div>
    </div>
  )
}