import { useState } from "react"
import {Pumpkin, Dark, Light, Bulb} from "../HauntedSvgs";
import { HorizontalBurger, MoonIcon, VerticalBurger, SunIcon } from "./components/svgs";

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
          /> : darkTheme ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <div>
        {navExpanded && <Links
        updateLightTheme={setDarkMode}
        lightTheme={darkTheme}
        className={`flex flex-col items-center ${darkTheme ? "text-gray-500" : "text-gray-800"}`}
        />}
      </div>
    </div>
  )
}

export function Links({updateLightTheme, lightTheme, className=""}) {
  return (
    <div className={`my-2 text-lg ${className}`}>
      <div className="flex items-center lg:hidden">
        <label htmlFor="dark">Dark mode</label>
        <input
        className="w-[3ch] h-[2ch] ml-1"
        type="checkbox" name="isDark" id="isDark"
        checked={lightTheme}
        onChange={() => updateLightTheme(!lightTheme)}
        />
      </div>
      <div className="flex flex-col lg:gap-[1rem] gap-2 pt-2">
        <a href="#about"
        className={`mobile-link ${lightTheme ? "border-gray-300/30" : "border-gray-700/30"} group`}
        >
          <span className="link-indicator"></span>
          <span>About</span>
        </a>

        <a href="#projects"
        className={`mobile-link ${lightTheme ? "border-gray-300/30" : "border-gray-700/30"} group`}
        >
          <span className="link-indicator"></span>
          <span>Projects</span>
        </a>

        <a href="#services"
        className={`mobile-link ${lightTheme ? "border-gray-300/30" : "border-gray-700/30"} group`}
        >
          <span className="link-indicator"></span>
          <span>Services</span>
        </a>

        <a href="#contact"
        className={`mobile-link ${lightTheme ? "border-gray-300/30" : "border-gray-700/30"} group`}
        >
          <span className="link-indicator"></span>
          <span>Contact</span>
        </a>
      </div>
    </div>
  )
}