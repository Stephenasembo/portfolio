import projectImg from "../../public/vite.svg"

export default function Projects() {
  return (
    <div className="mx-2">
      <h2 className="text-xl">Projects</h2>
      <div className="flex flex-col gap-[2rem]">
        <div>
          <h3 className="text-lg my-2">Scribbly</h3>
          <img
          src={projectImg}
          width={100}
          height={100}
          />
          <p>
            A full-stack blogging platform with a client site for readers, an admin dashboard for content management and a backend API powering both sites.
            Scribbly was designed to make content, creation fast, flexible and fun.
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">Remindr</h3>
          <img
          src={projectImg}
          width={100}
          height={100}
          />
          <p>
            A modular notification platform that lets users schedule and manage recurring reminders across multiple channels, from email to chat apps.
            Remindr was designed to automate notification delivery.
          </p>
        </div>
        <div>
          <h3 className="text-lg my-2">File Uploader</h3>
          <img
          src={projectImg}
          width={100}
          height={100}
          />
          <p>
            A secure cloud based file uploader system that lets users organize, manage, and share files with ease.
            File Uploader was designed to simplify file management and sharing in the cloud.
          </p>
        </div>
      </div>
    </div>
  )
}