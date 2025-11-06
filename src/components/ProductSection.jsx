import React from 'react';
import ProductCard from './ProductCard';

function ProductSection({ title, products }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      <h2 className="text-lg font-semibold ">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            offerText={item.offerText}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
