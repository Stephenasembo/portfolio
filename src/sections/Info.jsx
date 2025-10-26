import githubIcon from "../assets/icons/github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"
import {Links} from "../sections/NavigationBar"
import {FloatingGhost} from "../svgs"


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
      <ul className="flex gap-[1.5rem] flex-col lg:flex-row">
        <li className="social">
          <img
          src={githubIcon}
          width={32}
          height={32}
          />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Stephenasembo"
          className="lg:hidden"
          >View My Projects</a>
        </li>
        <li
        className="social"
        >
          <img
          src={mailIcon}
          width={32}
          height={32}
          />
          <span className="lg:hidden">stephenasembo524@gmail.com</span>
        </li>
        <li className="social">
          <img
          src={phoneIcon}
          width={32}
          height={32}
          />
          <span className="lg:hidden">+254706479001</span>
        </li>
        <li className="social">
          <img
          src={linkedinIcon}
          width={32}
          height={32}
          />
          <a
          className="lg:hidden"
          target="_blank" rel="noopener noreferrer"
          href="https://www.linkedin.com/in/stephen-asembo-91229327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          Connect on LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}