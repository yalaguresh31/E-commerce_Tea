
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import user from '../assets/user.png'
import shopping from '../assets/shopping.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className='flex justify-between items-center pl-2'>
        <div className='md:pl-10'>
          <Link to="/"><img src={logo}  alt="logo" className='md:w-[20vw] w-[35vw]' /></Link>
        </div>

        <div className={`md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 ${menuOpen ? 'top-[6%]' : 'top-[-100%]'} z-1 md:z-0 md:w-auto w-full p-10 text-center `}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-6 gap-8'>
            <li>
              <Link to="/" className="relative  group pb-2 hover:text-[#828181]" onClick={() => setMenuOpen(false)}>
                HOME
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 md:group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/collections" className='relative group pb-2 hover:text-[#828181]' onClick={() => setMenuOpen(false)}>
                TEA COLLECTIONS
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 md:group-hover:w-full'></span>
              </Link>
              </li>
            <li>
              <Link to="/accessories" className='relative group pb-2 hover:text-[#828181]' onClick={() => setMenuOpen(false)}>
                ACCESSORIES
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 md:group-hover:w-full'></span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className='relative group pb-2 hover:text-[#828181]' onClick={() => setMenuOpen(false)}>
                BLOG
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 md:group-hover:w-full'></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className='relative group pb-2 hover:text-[#828181]' onClick={() => setMenuOpen(false)}>
                CONTACT US
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 md:group-hover:w-full'></span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className='md:flex gap-6 pr-20 hidden'>
            <li><img src={search} alt="search" className='w-8'/></li>
            <li><img src={user} alt="user" onClick={()=> navigate('/account')} className='w-8 cursor-pointer'/></li>
            <li><img src={shopping} alt="shopping" className='w-8'/></li>
          </ul>
        </div>
        
        {/* adding menu and close icon */}
        <div className='flex items-center gap-5 md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? close : menu} alt="menu" className='cursor-pointer'/>
        </div>
      </nav>
    </>
  )
}

export default Header
