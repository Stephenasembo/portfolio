import githubIcon from "../assets/icons/github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"

export default function About() {
  return (
    <div className="mx-2">
      <h1 className="text-4xl my-2 font-extrabold">Stephen Asembo</h1>
      <h2 className="text-2xl my-4 font-medium">Full-stack web developer</h2>
      <p className="my-8">
        I build intuitive web apps focusing on optimized performance and clean UI.
      </p>
      <ul className="flex gap-[1rem] my-8">
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
      <div className="my-4">
        <h2 className="text-xl mt-16 mb-8">ABOUT</h2>
        <p className="my-4">
          I'm a developer who enjoys turning ideas into practical and interactive experiences.
          I craft clean, responsive and pixel-perfect user interfacesbacked by solid engineering to keep them fast and reliable.
        </p>
        <p className="my-4">
          I am passionate about improving workflow efficiency and finding creative ways to automate repetitive tasks.
          From lightweight task scripts to smart bots, I love designing tools that save time and boost productivity.
        </p>
        <p>
          My focus is on writing code that is simple, adaptable and useful across different contexts.
        </p>
      </div>
    </div>
  )
}