import React from 'react';
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";

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
     <div>
        <div className='container'>

        </div>
      </div>
    </>
  )
}

export default Hero;