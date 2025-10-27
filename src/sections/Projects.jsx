import projectImg from "../../public/vite.svg"
import ProjectCard from "./components/ProjectCard"
import AuthkitImg from "../assets/projects/Authkit_light_mode.png"
import Joke404Img from "../assets/projects/joke404_logo.png"

export default function Projects() {
  return (
    <div className="relative mb-12">
      <div className="sticky top-0 background-white">
        <h2
        id="projects"
        className="sectionTitle">PROJECTS</h2>
      </div>
      <div className="flex flex-col gap-[2rem]">
        <ProjectCard
          title="Authkit"
          projectImg={AuthkitImg}
          description="A modern, responsive authentication UI kit with client side form validation.
           Authkit was designed to make authentication integration clean, fast and reusable."
          stack={["Reactjs", "Formik", "Yup", "Tailwind"]}
        />

        <ProjectCard
          title="Scribbly"
          projectImg={projectImg}
          description="A full-stack blogging platform with a client site for readers, an admin dashboard for content management and a backend API powering both sites.
           Scribbly was designed to make content, creation fast, flexible and fun."
          stack={["Reactjs", "Expressjs", "Nodejs", "PostgreSQL"]}
        />

        <ProjectCard
          title="Joke404Bot"
          projectImg={Joke404Img}
          description="A Telegram bot that delivers jokes and explains them when you don't get it.
           Joke404 blends humor and simplicity, offering category based jokes, emoji reactions, and friendly explanations to make humor accessible for everyone."
          stack={["Nodejs", "Expressjs", "node-telegram-api", "Docker", "Railway"]}
        />

        <ProjectCard
          title="File Uploader"
          projectImg={projectImg}
          description="A secure cloud based file uploader system that lets users organize, manage, and share files with ease.
           File Uploader was designed to simplify file management and sharing in the cloud."
          stack={["Expressjs", "Nodejs", "Supabase"]}
        />

        <ProjectCard
          title="Remindr"
          projectImg={projectImg}
          description="A modular notification platform that lets users schedule and manage recurring reminders across multiple channels, from email to chat apps.
           Remindr was designed to automate notification delivery."
          stack={["Reactjs", "Expressjs", "Nodejs", "PostgreSQL"]}
        />
      </div>
    </div>
  )
}