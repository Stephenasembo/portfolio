export default function Contact() {
  return (
    <div className="my-2 relative mb-12">
      <div className="sticky top-0">
        <h2
        id="contact"
        className="sectionTitle">GET IN TOUCH</h2>
      </div>
      <p>
        Enter your contact details below and I will get back to you.
      </p>
      <form
      action="https://getform.io/f/ayveogyb"
      method="POST"
      className="flex flex-col gap-2 mt-2">
        <p>
          Fields marked with an asterisk(*) are required.
        </p>
        <div>
          <label htmlFor="name">Name:*</label>
          <input
          className="border-1 block rounded-lg w-full py-2 px-[12px] mt-1 h-[48px] max-w-[480px]"
          type="text" id="name" name="name" placeholder="Your name" required/>
        </div>
        <div>
          <label htmlFor="email">Email:*</label>
          <input
          className="border-1 block rounded-lg w-full py-2 px-[12px] mt-1 h-[48px] max-w-[480px]"
          type="email" id="email" name="email" placeholder="johndoe@gmail.com" required
          />
        </div>
        <div>
          <label htmlFor="message">Message:*</label>
          <textarea
          className="border-1 block rounded-lg w-full py-2 px-[12px] mt-1 max-w-[480px]"
          id="message" name="message" placeholder="Your message..." required
          ></textarea>
        </div>
        {/* Prevent spam */}
        <input type="hidden" name="_gotcha" style={{display: "none"}}></input>
        <button
        type="submit"
        className="w-[max-content] block mx-auto md:mx-0 p-1 rounded-lg px-2 my-2 bg-sky-500 cursor-pointer text-slate-50 hover:scale-125 hover:bg-sky-600 duration-300 ease-out font-semibold ring-2 ring-sky-400/30"
        >Send message</button>
      </form>
      <div className="flex gap-4 mt-4 mx-auto justify-center">
        <a href="mailto:stephenasembo524@gmail.com" className="btn-contact">
          <span>📧</span>
          <span>Email Me</span>
        </a>
        <a href="tel:+254706479001"
        className="btn-contact">
          <span>📞</span>
          <span>Call Me</span>
        </a>
        <a href="https://github.com/Stephenasembo" target="_blank" rel="noopener noreferrer" className="btn-contact">
          <span>💻</span>
          <span>View GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/stephen-asembo-91229327a" target="_blank" rel="noopener noreferrer" className="btn-contact">
          <span>🔗</span>
          <span>Connect on LinkedIn</span>
        </a>
      </div>

    </div>
  )
}