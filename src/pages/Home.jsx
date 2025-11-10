import React from 'react'
import Cards from '../components/Cards'
import LongCard from '../components/LongCard'
import MobileCards from '../components/MobileCards'
import SideCard from '../components/SideCard'
import SecondCard from '../components/SecondCard'
import ProductSection from '../components/ProductSection'
import ProductCard from '../components/ProductCard'
import Banner from '../components/Banner'
import { furnitureProducts, decorProducts, favoritesProducts, fashionProducts } from '../data/Products';

 
function Home() {


  return (
    <div className='bg-gray-100 p-2'>
    
        {/* All Card ke liye */}
            <div className='bg-white pr-9 pl-9 rounded-md m-1'>
            <div className="flex justify-between items-center bg-white px-8 py-3">
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100" title="Minutes" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" title="Mobiles & Tablets" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" title="Fashion" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" title="Electronics" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" title="Home & Furniture" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" title="TVs & Appliances" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" title="Flight Bookings" />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100" title="Beauty, Food..." />
                <Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" title="Grocery" />
            </div>
            </div>

        {/* Long Card ke liye  */}
            <div className='bg-white mt-3 rounded-2xl pb-2 '>
            <LongCard 
                Url="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6fb3e156951c0e9f.jpg?q=60"
                AltUrl="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/99790fd363b617e3.jpg?q=60"
                 Next="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/99790fd363b617e3.jpg?q=60"
            />
            </div>

        {/* Mobile card ke liye  */}
            <div className="flex gap-6 p-6 mt-3 rounded-2xl bg-gray-50">
                {/* Left section - Mobiles */}
                <div className="">
                    <h2 className="text-xl font-semibold mb-4">Best deals on smartphones</h2>
                        <div className="flex overflow-y gap-4">
                <MobileCards
                    imgUrl="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/f/-original-imahadxg8mgjzrfh.jpeg?q=70"
                    name="Google Pixel 9a"
                    price="Just  ₹44,599*"
                />
                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251543/shopping_1_atcrrm.webp"
                    name="Vivo V50 5G"
                    price="Just  ₹32,999*"
                />
                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251763/shopping_2_xbwy2f.webp"
                    name="OnePlus 13R 5G"
                    price="Just  ₹37,999*"
                />
                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251844/612UANCQFyL_olyimc.jpg"
                    name="Oppo Reno13 5G"
                    price="Just  ₹26,999*"
                />
                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251844/shopping_mzjfi4.webp"
                    name="Vivo X200 FE 5G"
                    price="Just  ₹51,999*"
                />
                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759252362/shopping_5_idr7ar.webp"
                    name="Oppo Find X8 Pro"
                    price="Just  ₹94,999*"
                />
                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759252366/shopping_4_xjwgud.webp"
                    name="Galaxy A565G"
                    price="Just  ₹24,999*"
                />

                <MobileCards
                    imgUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759252367/shopping_1_p7wijz.webp"
                    name="Realme 14 Pro"
                    price="Just  ₹28,999*"
                />
          
                    </div>
                </div>

                {/* Right section - Flight banner */}
                <div className="w-1/6">
                    <SideCard imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/ce3cf81edb760559.jpg?q=60" />
                </div>
            </div>

        {/* SecondCard    */}
        <div className='rounded-2xl mt-3'>
        {/* SecondCard ke liye  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-t-2xl lg:grid-cols-3 gap-6 p-3 bg-white">
                <SecondCard 
                    imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/3b44956df4619a2b.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/26e1b44851f1f98a.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/55d242da885dc27f.jpg?q=60"
                />

            </div>


        {/* SecondCard ke liye  */}
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 p-3 bg-white">
                <SecondCard 
                    imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/c04df6fda58be68a.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/a0c68442fd3e04d2.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/ea971de256af1590.jpg?q=60"
                />
            </div>


        {/* SecondCard ke liye  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-b-2xl lg:grid-cols-3 gap-6 p-3 bg-white">
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/b362542381d031e6.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/5a2e5762c9c37021.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/bb61d4184835a4db.jpg?q=60"
                />
            </div>
        </div>


        {/* SideProductCard ke liye  */}
        <div>
             <div className="p-4 pb-0 grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="md:col-span-2 space-y-4  h-fit">              
          <ProductSection title="Best Deals on Designer Furniture" products={furnitureProducts} />
                    <ProductSection title="Best Deals on Home Decor" products={decorProducts} />
                    
                </div>
                    <div className="bg-gray-100 flex flex-col justify-center items-center rounded-lg h-fit text-center">             
                        <ProductCard imgUrl='https://i.pinimg.com/474x/21/81/b1/2181b1f2fd0fb0006b0e1a48a51edbdc.jpg'/>
                    </div>
                </div>
        </div>


        {/* Banner */}
        <div>
            <Banner 
                BannerUrl="http://rukminim1.flixcart.com/fk-p-flap/3200/700/image/b0a88a67304dcdee.jpg?q=60 "
            />
        </div>



        {/* SecondCard    */}
        <div className='rounded-2xl mt-3 '>
        {/* SecondCard ke liye  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-t-2xl lg:grid-cols-3 gap-6 p-3 bg-white">
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/1f73146900d3a701.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/a8ce37c376fa41c7.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/ed1c9b3bd61fd4df.jpg?q=60"
                />

            </div>


        {/* SecondCard ke liye  */}
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 p-3 bg-white">
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/6bf3df96800ea986.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/b1bfe66a7e68186a.jpg?q=60"
                />
                <SecondCard 
                    imgUrl="https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/cc0fceaa9190f115.jpg?q=60"
                />
            </div>
        </div>


         {/* SideProductCard ke liye  */}
        <div>
             <div className="p-4 pb-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-4">
                    <ProductSection title="Best Deals on Designer Furniture" products={favoritesProducts} />
                    <ProductSection title="Fashion's Top Deals" products={fashionProducts} />
                </div>
                <div className="bg-gray-100 flex flex-col justify-center items-center rounded-lg h-fit text-center">
                    <ProductCard imgUrl='https://i.pinimg.com/736x/87/0a/4c/870a4c76f327372338017ff402554cd5.jpg'/>
                   
                </div>
                </div>
        </div>



        

    </div>
  )
}

export default Home



