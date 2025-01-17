import React from 'react'
import Card from './UI/Record_card'

function Achievments() {
  return (
    <div className='px-[3%] py-[10%] '>
      <div className='mt-[30%] text-center flex flex-col justify-evenly rounded-lg border-4 border-none w-[90vw] h-[60vh]  relative left-[3%]'>
        <div className='flex flex-col md:flex-row '>
        <Card number={'300+'} type={'devs'}/>
        <Card number={'10k+'} type={'impressions'}/>
        <Card number={'100+'} type={'projects'}/>
        </div>
        <img src="./Mask group.png" alt="" />
    </div>
  
    </div>
      
  
   
    
  )
}

export default Achievments