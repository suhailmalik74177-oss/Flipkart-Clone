import React from 'react'

function MobileCards(props) {<footer class="TKplD7">…</footer>
 return (
        <div className='flex flex-col items-center w-28 sm:w-32 cursor-pointer hover:scale-105 transition-transform duration-300'>
            <img src={props.phoneUrl} className='w-16 h-16 sm:w-36 sm:h-40 object-cover rounded-lg shadow-md '/>
            <h1 className='mt-2 text-sm sm:text-base font-semibold text-center'>{props.modal}</h1>
            <h1 className='mt-2 text-sm sm:text-base font-semibold text-center'>{props.Price}</h1>
        </div>
    )

}

export default MobileCards