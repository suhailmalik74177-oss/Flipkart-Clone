import React from 'react';

function ProductCard({ imgUrl, title, offerText }) {
  return (
    <div className="rounded-lg p-2 flex flex-col h-full items-center  cursor-pointer">
      <img src={imgUrl} alt={title} className="w-full h-[90%] object-cover rounded-md" />
    </div>
  );
}

export default ProductCard;
