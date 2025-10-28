import {Links} from "../sections/NavigationBar"
import { GithubIcon, EmailIcon, PhoneIcon, LinkedinIcon, LinkArrow } from "./components/svgs"
import {FloatingGhost} from "../HauntedSvgs"


export default function Info({haunted}) {
  return (
    <div className="lg:fixed top-[72px] lg:flex lg:flex-col gap-[1rem]">
      <div>
        <h1 className="text-4xl my-2 font-extrabold">Stephen Asembo</h1>
        <h2 className="text-2xl my-4 font-medium">Full-stack web developer</h2>
        <p className="my-8 w-[70%]">
          I build intuitive web apps focusing on optimized performance and clean UI.
        </p>
        <div className="hidden lg:block">
          <Links />
        </div>
      </div>
      {haunted &&
      <div
      className="animate-wiggle w-full"
      >
        <FloatingGhost />
      </div>
      }
      <ul className="flex gap-[1.5rem] flex-col lg:mt-4">
        <li>
          <a
          className="social"
          target="_blank" rel="noopener noreferrer" href="https://github.com/Stephenasembo"
          >
            <GithubIcon />
            <span>View my projects</span>
            <LinkArrow />
          </a>
        </li>
        <li
        className="social"
        >
          <EmailIcon />
          <span>stephenasembo524@gmail.com</span>
        </li>
        <li className="social lg:hidden">
          <PhoneIcon />
          <span>+254706479001</span>
        </li>
        <li className="social lg:hidden">
          <LinkedinIcon />
          <a
          target="_blank" rel="noopener noreferrer"
          href="https://www.linkedin.com/in/stephen-asembo-91229327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          Connect on LinkedIn
          </a>
          <LinkArrow />
        </li>
      </ul>
    </div>
  )
}