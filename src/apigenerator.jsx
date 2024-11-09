import React from 'react'

import { FaXTwitter } from "react-icons/fa6";

function Apigenerator() {
  return (
    <div className=' fixed bg-gray-950 w-full  h-[200px] sm:h-[320px] lg:h-[320px] '>
      <div className='text-center mt-[20px] sm:mt-[50px] lg:mt-[50px] xl:mt-[50px]'>
        <h1 className='text-white text-[20px] sm:text-[35px] lg:text-[60px] font-[TimesNewRoman]'>Random User Generator</h1>
      </div>
      <div className=' items-center text-center mt-[10px]'>
        <p className='text-white text-[15px] sm:text-[20px] lg:text-[31x] font-[TimesNewRoman]'>A free, <a href="https://github.com/RandomAPI/Randomuser.me-Node" className='underline text-blue-600'>open-source</a> API for generating random user data. Like Lorem Ipsum, but for people.</p>
        <div className='flex justify-center mt-[20px]'><FaXTwitter  className='text-[blue] mt-[3px]' size={20}/><p className='text-white ml-[10px]'>Follow us <a href="#" className='text-blue-600 underline'>@randomapi</a></p> </div>
        
      </div>
     
    </div>
  )
}

export default Apigenerator