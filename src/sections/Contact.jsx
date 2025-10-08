import githubIcon from "../assets/icons/github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"
import phoneIcon from "../assets/icons/phone.svg"

export default function Contact() {
  return (
    <div className="my-2">
      <h2 className="text-xl my-4">Get in touch with me.</h2>
      <p>
        Enter your contact details below and I will get back to you.
      </p>
      <form className="flex flex-col gap-2 mt-2">
        <p>
          Fields marked with an asterisk(*) are required.
        </p>
        <div>
          <label htmlFor="name">Name:*</label>
          <input
          className="border-1 block rounded-lg w-full py-2 px-[12px] mt-1 h-[48px] max-w-[480px]"
          type="text" id="name" name="name" placeholder="Your name"/>
        </div>
        <div>
          <label htmlFor="email">Email:*</label>
          <input
          className="border-1 block rounded-lg w-full py-2 px-[12px] mt-1 h-[48px] max-w-[480px]"
          type="email" id="email" name="email" placeholder="johndoe@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message:*</label>
          <textarea
          className="border-1 block rounded-lg w-full py-2 px-[12px] mt-1 max-w-[480px]"
          id="message" name="message" placeholder="Your message..."
          ></textarea>
        </div>
        <button
        className="w-[max-content] block mx-auto border-1 p-1 rounded-xl px-2 my-2"
        >Send message</button>
      </form>
      <ul className="flex gap-[1.5rem] my-8 justify-center">
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