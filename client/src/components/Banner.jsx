import React from 'react'

function Banner(props) {
  return (
    <div className="flex items-center w-full sm:w-full  pl-2 cursor-pointer transform transition-transform duration-300 ">
      
      <img 
        src={props.BannerUrl} 
        alt='' 
        className="w-[99.6%]  h-30 sm:h-70 object-cover  shadow-md"
      />
      
    </div>
  )
}

export default Banner