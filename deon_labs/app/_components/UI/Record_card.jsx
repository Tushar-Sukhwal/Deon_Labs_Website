import React from 'react'


function Card({number  ,  type}) {
  return (
    <div className='border rounded-xl bg-black py-[10%] md:mx-[4%] mt-[5%] mb-[2%] border-gray-500 drop-shadow-xl w-[90vw] h-[25vh] flex flex-col lg:w-[60vw]  '>
      
      <div className=''>
      <h1 className='font-tektur text-xl font-semibold '>
        {number}
      </h1>
      <h1 className='opacity-50  py-[1%] font-tektur'>
        {type}
      </h1>
      </div>
     
     
      
    </div>
  )
}

export default Card ; 