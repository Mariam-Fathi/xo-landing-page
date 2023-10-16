import { useState } from "react";

import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    const [toggel, setToggel] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        {/* Logo */}
        <a href='/'>
         <h1 className="text-coral-red font-extrabold text-[35px]">XO</h1>
        </a>

        {/* Navbar-Links */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="hover:scale-125">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg font-medium text-black'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 hover:scale-110'>
          <a href='/'>Sign in</a>
        </div>

        {/* Hamburger Menu */}
        <div className='hidden max-lg:block'>
          <img 
          src={hamburger} 
          alt='hamburger icon' 
          width={25} 
          height={25}
          onClick={() => setToggel(!toggel)}
          />
          {toggel && (
            <div className='absolute top-0 right-0 h-screen w-screen bg-white'>
              <div className="absolute top-7 right-11">
                <AiOutlineClose
                  className="w-[28px] h-[28px]"
                  onClick={() => setToggel(!toggel)}
                />
              </div>

              <div className="">
                <ul className="w-screen h-screen flex flex-col flex-1 justify-center items-center gap-36">
                 {navLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className='font-montserrat font-bold leading-normal text-2xl text-coral-red'
                        onClick={() => setToggel(!toggel)}
                      >
                        {item.label}
                      </a>
                    </li>
                 ))}
                </ul>
              </div>
            </div>
          )
          }

        </div>
      </nav>
    </header>
  );
};

export default Nav;
