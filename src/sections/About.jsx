import githubIcon from "../assets/icons/github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"

export default function About() {
  return (
    <div className="mx-2">
      <h1 className="text-4xl my-2 font-extrabold">Stephen Asembo</h1>
      <h2 className="text-2xl my-4 font-medium">Full stack web developer</h2>
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
      <div className="">
        <h2 className="text-xl mt-16 mb-8">ABOUT</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit suscipit perferendis provident excepturi, dolores quod tenetur molestias accusamus ratione quos sit et doloremque ullam voluptatibus enim quibusdam? Possimus, recusandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore minima quibusdam temporibus quo. Eaque saepe deserunt in ad eius veniam, similique qui necessitatibus, nam minus sit quidem labore ducimus.
        </p>
      </div>
    </div>
  )
}