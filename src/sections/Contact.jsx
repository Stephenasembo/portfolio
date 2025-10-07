import githubIcon from "../assets/icons/github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"

export default function Contact() {
  return (
    <div className="mx-2">
      <h2 className="text-xl my-4">Let's build something together.</h2>
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea></textarea>
        </div>
      </form>
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
    </div>
  )
}