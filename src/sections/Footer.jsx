import reactIcon from "../assets/icons/react.svg"

export default function Footer() {
  return (
    <div className="mx-2">
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
    </div>
  )
}