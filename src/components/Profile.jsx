import { Formal } from "./ProfileFormal"
import resume from '../assets/Lucas_2025.pdf'
import { Link } from "react-router-dom"

const Profile = () => {

  return (
    <div className="p-12 font-normal">

      <Link to='/' className="mb-8 block hover:text-yellow-300">-</Link>
      <div className="max-w-3xl text-justify text-xs sm:text-base">
        <Formal />
      </div>

      <div className="w-full flex justify-between max-w-3xl mt-12">
        <div className="leading-loose text-xs sm:text-base">
          <h3 className="italic font-bold">CONTACT</h3>
          <h4><a
            href="mailto:lsf.move@gmail.com"
            className="hover:text-[#73fc7a]">
            lsf.mov@gmail.com</a></h4>
          +1 786-547-2024
        </div>
        <ul className="leading-loose text-right w-[120px] [&>li:hover]:text-[#73fc7a] 
                        [&>li:hover]:cursor-pointer text-xs sm:text-base">
          <p className="italic font-bold">LINKS</p>
          <li><a href="http://www.linkedin.com/in/lsfnyc">LinkedIn</a></li>
          <li><a href="https://vimeo.com/lsfnyc">Vimeo</a></li>
          <li><a href="https://www.instagram.com/lsf.mov/">Instagram</a></li>
          <li><a href="https://linktr.ee/somdolucas">Music</a></li>
          <li className="text-[#73fc7a]"><a href={resume}>Resume</a></li>
        </ul>
      </div>
    </div>
  )
}

export { Profile }