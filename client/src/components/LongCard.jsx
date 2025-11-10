import React, { useState } from 'react';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";


function LongCard({ Url, AltUrl, Next }) {
  const [imgSrc, setImgSrc] = useState(Url);

  const onClick = () => {
    // Toggle between Url and AltUrl
    setImgSrc(imgSrc === Url ? AltUrl : Url);
    
  };
 
  return (
    <div className="flex items-center w-full sm:w-full pt-2 pl-2 cursor-pointer transform transition-transform duration-300 ">
      <button 
        onClick={onClick} 
        className=" flex items-center px-4  h-65 bg-white  hover:bg-gray-300 rounded-l"
      >
        <GoChevronLeft size={20}/>
      </button>
      <img 
        src={imgSrc} 
        alt='' 
        className="w-[93%]  h-30 sm:h-65 object-cover  shadow-md"
      />
      <button 
        onClick={onClick} 
        className=" flex items-center  px-4  h-65 bg-white  hover:bg-gray-300 rounded-r"
      >
        <GoChevronRight size={20}/>
      </button>
    </div>
  );
}

export default LongCard;

