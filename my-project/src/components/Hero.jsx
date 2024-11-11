import React from 'react';
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import {motion} from "framer-motion";
import Navbar from './Navbar';

const headphoneData = [
    {
      id: 1,
      image: Fanta1,
      title: "Orange Fanta",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
      price: "$40",
      modal: "Orange",
      bgColor: "#cf4f00",
    },
    {
      id: 2,
      image: Fanta2,
      title: "Cola Zero",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
      price: "$100",
      modal: "Zero",
      bgColor: "#727272",
    },
    {
      id: 3,
      image: Fanta3,
      title: "Coca Cola",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
      price: "$100",
      modal: "Cola",
      bgColor: "#ac1a00",
    },
  ];

const Hero = () => {
    const [activeData, setActiveData] = React.useState(headphoneData[0]);

    const handleActiveData = (data) => {
      setActiveData(data);
    };

  return (
    <>
     <motion.div 
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark text-white"
      >
     
       <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[605px]'>
        <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1'>
         <div className='space-y-5 text-center md:text-left'>
          <h1 className='text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow'>{activeData.title}</h1>
          <p className=''>{activeData.subtitle}</p>
          <button className='px-4 py-2 text-black bg-white inline-block font-normal rounded-sm'>
            Order Now
          </button>

          <div className='flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10'>
            <div className='w-20 h-[1px] bg-white'></div>
            <p>TOP RECOMMENDATION</p>
            <div className='w-20 h-[1px] bg-white'></div>
          </div>

         </div>  
        </div>
       </div>
      </motion.div>
    </>
  )
}

export default Hero;