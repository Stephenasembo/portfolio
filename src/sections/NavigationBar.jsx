import { useState } from "react"
import {Pumpkin, Dark, Light, Bulb} from "../HauntedSvgs";
import { HorizontalBurger, VerticalBurger } from "./components/svgs";

export default function NavigationBar({haunted, setHaunted, darkTheme, setDarkMode}) {
  const [navExpanded, setNavExpanded] = useState(false);
  const [lit, setLit] = useState(true);

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
          {navExpanded ? <VerticalBurger /> : <HorizontalBurger />}
        </button>
        <button
        className="w-[max-content] justify-self-end hidden lg:block cursor-pointer"
        onClick={() => {
          if(haunted) {
            setLit(!lit)
          } else {
            setDarkMode(!darkTheme)
          }
        }}
        >
          {haunted ? <Bulb
          isLit={lit}
          /> : darkTheme ? <Dark /> : <Light />}
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
    </div>
  )
}