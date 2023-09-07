import React from 'react'

function Service({heading , desc}) {
  return (
    <div className='border rounded-xl bg-black border-gray-500 drop-shadow-xl h-[25vh] w-[85vw] align-middle relative left-[8%]'>
      
      <h1 className='font-tektur font-[1000] py-[6%] px-[9%] text-xl'>{heading}</h1>
      <p className='opacity-50 font-tektur text-sm overflow-none px-[9%]'>{desc}</p>
    </div>
  )
}

export default Service