import reactIcon from "../assets/react.svg"
import { Pumpkin } from "../HauntedSvgs"

export default function Footer({haunted}) {
  return (
    <div>
      <p className="text-center mb-2"><span>&copy;</span> 2025 Stephen Asembo</p>
      <p className="text-center">
        Made with React
        <img
        className="inline-block ml-2"
        src={reactIcon}
        width={32}
        height={32}
        />  
      </p>
      {haunted &&
      <div className="flex justify-around mt-2">
        <Pumpkin
        styles="animate-bounce"
        />
        <Pumpkin
        styles="animate-bounce"
        />
        <Pumpkin
        styles="animate-bounce"
        />
      </div>
      }
    </div>
  )
}