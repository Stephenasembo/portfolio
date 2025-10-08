import githubIcon from "../assets/icons/github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"
import {Links} from "../sections/NavigationBar"


export default function Info() {
  return (
    <div className="lg:fixed top-[96px] lg:flex lg:flex-col gap-[1rem]">
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
      <ul className="flex gap-[1.5rem] my-8">
        <li>
          <img
          src={githubIcon}
          width={32}
          height={32}
          />
        </li>
        <li>
          <img
          src={mailIcon}
          width={32}
          height={32}
          />
        </li>
        <li>
          <img
          src={phoneIcon}
          width={32}
          height={32}
          />
        </li>
        <li>
          <img
          src={linkedinIcon}
          width={32}
          height={32}
          />
        </li>
      </ul>
    </div>
  )
}