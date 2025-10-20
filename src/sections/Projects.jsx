import projectImg from "../../public/vite.svg"

export default function Projects() {
  return (
    <div className="relative mb-12">
      <div className="sticky top-0 background-white">
        <h2 className="sectionTitle">PROJECTS</h2>
      </div>
      <div className="flex flex-col gap-[2rem]">
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md cursor-pointer duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">Scribbly</h3>
          <div
          className="lg:grid lg:grid-cols-[max-content_1fr] gap-[2rem]">
            <img
            src={projectImg}
            width={100}
            height={100}
            />
            <div>
              <p>
                A full-stack blogging platform with a client site for readers, an admin dashboard for content management and a backend API powering both sites.
                Scribbly was designed to make content, creation fast, flexible and fun.
              </p>
              <div className="my-2 flex gap-2 flex-wrap">
                <span className="border-1 rounded-full px-2">React</span>
                <span className="border-1 rounded-full px-2">Expressjs</span>
                <span className="border-1 rounded-full px-2">Nodejs</span>
                <span className="border-1 rounded-full px-2">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md cursor-pointer duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">Remindr</h3>
          <div className="lg:grid lg:grid-cols-[max-content_1fr] gap-[2rem]">
            <img
            src={projectImg}
            width={100}
            height={100}
            />
            <div>
              <p>
                A modular notification platform that lets users schedule and manage recurring reminders across multiple channels, from email to chat apps.
                Remindr was designed to automate notification delivery.
              </p>
              <div className="my-2 flex gap-2 flex-wrap">
                <span className="border-1 rounded-full px-2">React</span>
                <span className="border-1 rounded-full px-2">Expressjs</span>
                <span className="border-1 rounded-full px-2">Nodejs</span>
                <span className="border-1 rounded-full px-2">PostgreSQL</span>
                <span className="border-1 rounded-full px-2">AWS</span>
              </div>
            </div>
          </div>
        </div>
        <div
        className=" border border-slate-300/60 rounded-xl p-2 shadow-sm hover:shadow-md cursor-pointer duration-300 ease-out hover:scale-105 hover:bg-slate-50/30"
        >
          <h3 className="text-lg my-2 font-medium">File Uploader</h3>
          <div className="lg:grid lg:grid-cols-[max-content_1fr] gap-[2rem]">
            <img
            src={projectImg}
            width={100}
            height={100}
            />
            <div>
              <p>
                A secure cloud based file uploader system that lets users organize, manage, and share files with ease.
                File Uploader was designed to simplify file management and sharing in the cloud.
              </p>
              <div className="my-2 flex gap-2">
                <span className="border-1 rounded-full px-2">Expressjs</span>
                <span className="border-1 rounded-full px-2">Nodejs</span>
                <span className="border-1 rounded-full px-2">Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}