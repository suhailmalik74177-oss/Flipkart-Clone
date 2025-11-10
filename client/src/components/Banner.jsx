import React from 'react'

function Banner(props) {
  return (
    <div className="flex items-center w-full sm:w-full pt-2 pl-2 cursor-pointer transform transition-transform duration-300 ">
      
      <img 
        src={props.BannerSrc} 
        alt='' 
        className="w-[99%]  h-30 sm:h-65 object-cover  shadow-md"
      />
      
    </div>
  )
}

export default Banner