import logo from '../assets/ahedLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center px-4">
            <img src={logo} alt="logo" className='object-contain mx-2 h-32 w-48 xs:h-24 xs:w-32 '  />
        </div>
        <div className='flex justify-between  items-center m-8 gap-4 text-2xl'>
           <FaLinkedin />
           <FaGithub />
        </div>
      
    </nav>
  )
}

export default Navbar
