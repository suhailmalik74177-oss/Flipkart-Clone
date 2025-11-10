import React from 'react'

function SideCard({ imgUrl }) {
  return (
    <div className="cursor-pointer transition-transform duration-300">
      <img 
        src={imgUrl} 
        alt="side banner" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  )
}

export default SideCard
