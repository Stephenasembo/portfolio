import { useState } from "react"
import navBurger from "../assets/icons/menu-burger.svg"
import verticalBurger from "../assets/icons/menu-burger-vertical-thin.svg"

export default function NavigationBar() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <div>
      <div className="m-2 grid grid-cols-2 items-center">
        <span className="border-1 w-[max-content] p-2 text-xl font-bold rounded-xl">SA</span>
        <button
        className="border-1 w-[max-content] justify-self-end p-1 rounded-lg"
        onClick={() => setNavExpanded(!navExpanded)}
        >
          <img
          src={navExpanded ? verticalBurger : navBurger}
          width={32}
          height={32}
          />
        </button>
      </div>
      <div>
        {navExpanded && <Links />}
      </div>
      </div>
  )
}

function Links() {
  return (
    <div className="m-2 text-lg">
      <div className="flex items-center">
        <label htmlFor="dark">Dark mode</label>
        <input
        className="w-[3ch] h-[2ch] ml-1"
        type="checkbox" name="dark" id="dark" />
      </div>
      <div className="flex flex-col">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <button>Hire Me</button>
    </div>
  )
}