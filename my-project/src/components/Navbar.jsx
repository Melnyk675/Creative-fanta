import React from 'react';
import Logo from "../assets/logo.png";
import { FaUserLarge } from "react-icons/fa6";
import { RiMenuUnfold4Line } from "react-icons/ri";

const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Categories",
      link: "#",
    },
    {
      id: 3,
      title: "Blog",
      link: "#",
    },
    {
      id: 4,
      title: "About",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];

const Navbar = () => {
  return (
    <div className='bg-orange-500 text-white py-8'>
      <div className='container flex justify-between'>
       <div>
        <img src={Logo} alt="Fanta" className='max-w-[100px] invert'/>
        </div>
     <div className='hidden md:block'>
        <ul className='flex items-center gap-4 relative z-30'>
            {NavbarMenu.map((item) => (
           <li>
            <a 
            href={item.link}
            className='inline-block text-base font-semibold py-2 px-3 uppercase'
            >{item.title}</a>
           </li>
         ))}
         <button className='text-xl ps-14'>
          <FaUserLarge />
         </button>
       </ul>
     </div>
     <div className='md:hidden'> 
      <RiMenuUnfold4Line />
     </div>
    </div>
   </div>
  )
}

export default Navbar;