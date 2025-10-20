import { useState } from "react"
import navBurger from "../assets/icons/menu-burger.svg"
import verticalBurger from "../assets/icons/menu-burger-vertical-thin.svg"
import {Pumpkin, Dark, Light} from "../svgs";

export default function NavigationBar({haunted, setHaunted}) {
  const [navExpanded, setNavExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className="mb-2 pt-2 grid grid-cols-2 items-center lg:grid-cols-[max-content_1fr]">
        {/* <span className="border-1 w-[max-content] p-2 text-xl font-bold rounded-xl">SA</span> */}
        <button
        className="cursor-pointer"
        onClick={() => setHaunted(!haunted)}
        >
          <Pumpkin />
        </button>
        <button
        className="border-1 w-[max-content] justify-self-end p-1 rounded-lg lg:hidden"
        onClick={() => setNavExpanded(!navExpanded)}
        >
          <img
          src={navExpanded ? verticalBurger : navBurger}
          width={32}
          height={32}
          />
        </button>
        <button
        className="w-[max-content] justify-self-end hidden lg:block cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Dark /> : <Light />}
        </button>
      </div>
      <div>
        {navExpanded && <Links />}
      </div>
    </div>
  )
}

export function Links() {
  return (
    <div className="my-2 text-lg">
      <div className="flex items-center lg:hidden">
        <label htmlFor="dark">Dark mode</label>
        <input
        className="w-[3ch] h-[2ch] ml-1"
        type="checkbox" name="dark" id="dark" />
      </div>
      <div className="flex flex-col lg:gap-[1rem]">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <button
      className="mt-[1rem] rounded-lg px-4 py-1 bg-sky-500 cursor-pointer text-slate-50 hover:scale-125 hover:bg-sky-600 duration-300 ease-out font-semibold ring-2 ring-sky-400/30">
        Hire Me
      </button>
    </div>
  )
}