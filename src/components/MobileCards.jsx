import React from 'react'

function MobileCards({ imgUrl, name, price }) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 p-3">
      <img 
        src={imgUrl} 
        alt={name} 
        className="w-32 h-40 object-contain mb-2"
      />
      <h3 className="text-sm font-medium text-gray-800 text-center">{name}</h3>
      <p className="text-sm font-semibold text-gray-900 text-center">{price}</p>
    </div>
  )
}

export default MobileCards
