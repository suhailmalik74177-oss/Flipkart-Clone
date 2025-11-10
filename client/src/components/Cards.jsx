import React from 'react'

function Cards(props){
    return (
        <div className='flex flex-col items-center w-28 sm:w-32 cursor-pointer hover:scale-105 transition-transform duration-300'>
            <img src={props.imgUrl} className='w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg shadow-md '/>
            <h1 className='mt-2 text-sm sm:text-base font-semibold text-center'>{props.text}</h1>
        </div>
    )
}

export default Cards
