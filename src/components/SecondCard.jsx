import React from 'react'

function SecondCard({ imgUrl }) {
  return (
    <div className="flex items-center justify-center bg-white shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer p-1">
      <img 
        src={imgUrl} 
        alt="card item" 
        className="w-full h-full object-contain "
      />
    </div>
  )
}

export default SecondCard
