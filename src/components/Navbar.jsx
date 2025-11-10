import React from 'react'
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill, RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";




import { Link } from 'react-router-dom';
import { useUser } from "../pages/UserContext";



const Navbar = () => {  
  const {user, clearUser} = useUser();

  return (
    <nav className='flex justify-around items-center p-6 w-full bg-white-600  z-10 relative'>
      
        {/* Logo */}
          <Link to="/">
            <img 
              src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' 
              alt="logo"
              className='h-8'
            />
          </Link>

        {/* Search Box */}
          <input
            type='text'
            placeholder='Search'
            className='rounded-md px-3 py-1 w-1/2 bg-neutral-100 outline-none border border-transparent focus:border-blue-500'
          />
      
        {/* Navbar Links */}
          <ul className='flex gap-6 font-medium items-center'>
            <li className='hidden sm:flex '>
              <Link to="/login" className='flex items-center gap-1 hover:scale-103 '>
                <CgProfile size={27}/>Login
              </Link>          
            </li>

            <li className='hidden sm:flex'>
              <Link to="/cart" className='flex items-center gap-1 hover:scale-103 '>
                <RiShoppingCart2Line size={27}/>Cart
              </Link>
            </li>

            <li className='hidden sm:flex'>
              <Link to="/become-seller" className='flex items-center gap-1 hover:scale-103 '>
                <AiOutlineShop size={27}/>Become a Seller
              </Link>
            </li>
        
            {/* Three Dots Dropdown */}
              <li className="relative group">
                <Link to="" className='flex items-center gap-1 hover:scale-103 '>
                  <HiDotsVertical size={22}/>
                </Link>

                {/* Dropdown Card */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="flex flex-col p-2 text-gray-700">
                      {/* <li>
                        <Link to="" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                          <MdNotificationsNone  size={26}/> Notifiaction 
                        </Link>
                      </li> */}
                      <li>
                        <Link to="" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                          <MdNotificationsNone  size={26}/> Notifiaction 
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                          <RiCustomerService2Fill size={26}/> 24x7 Customer Care
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                          <IoAnalyticsOutline size={26}/> Advertise
                        </Link>
                      </li>
                      <li>
                        <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                          <FiDownload size={27}/> Download App
                        </button>
                      </li>
                    </ul>
                  </div>
              </li>
          </ul>
    </nav>
  )
}

export default Navbar



