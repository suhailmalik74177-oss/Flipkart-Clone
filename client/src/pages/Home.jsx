import React from "react";
import Cards from "../components/Cards";
import LongCard from "../components/LongCard";
import MobileCards from "../components/MobileCards";
import SideCard from "../components/SideCard";
import SecondCard from "../components/SecondCard";
import ProductSection from "../components/ProductSection";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import {
  furnitureProducts,
  decorProducts,
  favoritesProducts,
  fashionProducts,
} from "../data/Products";

function Home() {
  return (
    <div className="bg-gray-100 p-2 sm:p-4">
      {/* ===== Top Category Cards ===== */}
      <div className="bg-white rounded-lg shadow-sm m-1 sm:m-2 overflow-x-auto scrollbar-hide">
        <div className="flex justify-between items-center px-4 sm:px-8 py-3 gap-4 min-w-max sm:min-w-0">
          {[
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100", "Minutes"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100", "Mobiles & Tablets"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100", "Fashion"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100", "Electronics"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100", "Home & Furniture"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100", "TVs & Appliances"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100", "Flight Bookings"],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100", "Beauty, Food..."],
            ["https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100", "Grocery"],
          ].map(([img, title], i) => (
            <Cards key={i} imgUrl={img} title={title} />
          ))}
        </div>
      </div>

      {/* ===== Long Banner ===== */}
      <div className="bg-white mt-3 rounded-xl overflow-hidden">
        <LongCard
          Url="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6fb3e156951c0e9f.jpg?q=60"
          AltUrl="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/99790fd363b617e3.jpg?q=60"
          Next="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/99790fd363b617e3.jpg?q=60"
        />
      </div>

      {/* ===== Mobile Deals Section ===== */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6 mt-4 bg-white rounded-2xl shadow-sm">
        {/* Left - Mobiles */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 px-1">
            Best Deals on Smartphones
          </h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 sm:gap-4 pb-2">
              {[
                ["https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/f/-original-imahadxg8mgjzrfh.jpeg?q=70", "Google Pixel 9a", "₹44,599"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759251543/shopping_1_atcrrm.webp", "Vivo V50 5G", "₹32,999"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759251763/shopping_2_xbwy2f.webp", "OnePlus 13R 5G", "₹37,999"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759251844/612UANCQFyL_olyimc.jpg", "Oppo Reno13 5G", "₹26,999"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759251844/shopping_mzjfi4.webp", "Vivo X200 FE 5G", "₹51,999"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759252362/shopping_5_idr7ar.webp", "Oppo Find X8 Pro", "₹94,999"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759252366/shopping_4_xjwgud.webp", "Galaxy A56 5G", "₹24,999"],
                ["https://res.cloudinary.com/dleixx6wj/image/upload/v1759252367/shopping_1_p7wijz.webp", "Realme 14 Pro", "₹28,999"],
              ].map(([img, name, price], i) => (
                <MobileCards key={i} imgUrl={img} name={name} price={`Just ${price}*`} />
              ))}
            </div>
          </div>
        </div>

        {/* Right - Side Banner */}
        <div className="lg:w-1/4 flex justify-center">
          <SideCard imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/ce3cf81edb760559.jpg?q=60" />
        </div>
      </div>

      {/* ===== Multi Image Sections ===== */}
      <div className="rounded-2xl mt-4 space-y-4">
        {[[
          "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/3b44956df4619a2b.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/26e1b44851f1f98a.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/55d242da885dc27f.jpg?q=60",
        ],
        [
          "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/c04df6fda58be68a.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/a0c68442fd3e04d2.jpg?q=60",
          "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/ea971de256af1590.jpg?q=60",
        ],
        [
          "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/b362542381d031e6.jpg?q=60",
          "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/5a2e5762c9c37021.jpg?q=60",
          "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/bb61d4184835a4db.jpg?q=60",
        ]].map((urls, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 bg-white p-3 rounded-xl shadow-sm"
          >
            {urls.map((url, j) => (
              <SecondCard key={j} imgUrl={url} />
            ))}
          </div>
        ))}
      </div>

      {/* ===== Product Sections with Side Banner ===== */}
      <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-2 space-y-4">
          <ProductSection
            title="Best Deals on Designer Furniture"
            products={furnitureProducts}
          />
          <ProductSection title="Home Decor Steals" products={decorProducts} />
        </div>
        <div className="bg-gray-100 rounded-lg flex justify-center items-center h-fit p-3">
          <ProductCard imgUrl="https://i.pinimg.com/474x/21/81/b1/2181b1f2fd0fb0006b0e1a48a51edbdc.jpg" />
        </div>
      </div>

      {/* ===== Banner ===== */}
      <div className="mt-4">
        <Banner BannerUrl="http://rukminim1.flixcart.com/fk-p-flap/3200/700/image/b0a88a67304dcdee.jpg?q=60" />
      </div>

      {/* ===== More Product Sections ===== */}
      <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-2 space-y-4">
          <ProductSection
            title="Customer Favorites"
            products={favoritesProducts}
          />
          <ProductSection
            title="Fashion's Top Deals"
            products={fashionProducts}
          />
        </div>
        <div className="bg-gray-100 rounded-lg flex justify-center items-center h-fit p-3">
          <ProductCard imgUrl="https://i.pinimg.com/736x/87/0a/4c/870a4c76f327372338017ff402554cd5.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
