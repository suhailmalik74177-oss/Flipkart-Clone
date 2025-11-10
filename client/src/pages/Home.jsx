import React from 'react'
import Cards from '../components/Cards'
import LongCard from '../components/LongCard'
import MobileCards from '../components/MobileCards'
import Banner from '../components/Banner'
 
const Home = () => {
    
  return (
    <>

    <div className='bg-white mt-2 pr-9 pl-9'>
    <div className='grid grid-cols-10 gap-3 p-2 '>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100" text="Minutes"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" text="Mobiles&Tablets"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9c64dfa667885ca9.png?q=100" text="TV & Appliances"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/4d6b13d5a0e0724a.png?q=100" text="Electronics"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/ec2982e5564fe07c.png?q=100" text="Fashion"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/febcb9896245caf4.png?q=100" text="Home & Kitchen"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/3d7144345bbcf2e4.png?q=100" text="Beauty & Toys"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/cddd92e134ba3ea9.png?q=100" text="Furniture"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d9eea6cd0e7b68bb.png?q=100" text="Flight Bookings"/></a>
        <a href=""><Cards imgUrl="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/2ebb95ec20eae8f1.png?q=100" text="Grocery"/></a>

        
    </div>
    </div>


    <div className='bg-white mt-3'>
        <LongCard 
        Url="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/e0b5fd2b1715a3fe.jpeg?q=60"
        AltUrl="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/80ed6c43325f596b.jpg?q=60"
        Next="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/d1743320c28e67ba.jpg?q=60"
        />
    </div>

    <div className=' bg-white  mt-3 '>
    <Banner 
        BannerSrc="https://rukminim2.flixcart.com/fk-p-flap/3200/460/image/7753c5640e0284a5.jpg?q=60"
    />
    <h1>Best deals on smartphones</h1>
    
    <div className='flex justify-between gap-4 p-2 '>
        <MobileCards
            phoneUrl="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/f/-original-imahadxg8mgjzrfh.jpeg?q=70"
            modal="Google Pixel 9a"
            Price="Just  ₹44,599*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251543/shopping_1_atcrrm.webp"
            modal="Vivo V50 5G"
            Price="Just  ₹32,999*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251763/shopping_2_xbwy2f.webp"
            modal="OnePlus 13R 5G"
            Price="Just  ₹37,999*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251844/612UANCQFyL_olyimc.jpg"
            modal="Oppo Reno13 5G"
            Price="Just  ₹26,999*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759251844/shopping_mzjfi4.webp"
            modal="Vivo X200 FE 5G"
            Price="Just  ₹51,999*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759252362/shopping_5_idr7ar.webp"
            modal="Oppo Find X8 Pro"
            Price="Just  ₹94,999*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759252366/shopping_4_xjwgud.webp"
            modal="Galaxy A565G"
            Price="Just  ₹24,999*"
        />
        <MobileCards
            phoneUrl="https://res.cloudinary.com/dleixx6wj/image/upload/v1759252367/shopping_1_p7wijz.webp"
            modal="Realme 14 Pro"
            Price="Just  ₹28,999*"
        />
        
        
        
    </div>
    </div>

    </>
  )
}

export default Home



