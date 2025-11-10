import React from 'react'

function Cards({ imgUrl, title }) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-16 h-16 object-contain mb-1"
      />
      <p className="text-sm font-medium text-gray-800">{title}</p>
    </div>
    
  )
}

export default Cards
