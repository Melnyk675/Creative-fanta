import React from 'react';
import Logo from "../assets/logo.png";

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
      <div className='container'>
       <div>
        <img src={Logo} alt="Fanta" className='max-w-[100px] invert'>
         
        </img>
       </div>
      </div>
    </div>
  )
}

export default Navbar;