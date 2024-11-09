import React from 'react'

import { FaXTwitter } from "react-icons/fa6";

function Apigenerator() {
  return (
    <div className='  bg-gray-950 w-full  h-[250px] '>
      <div className='text-center mt-[30px]'>
        <h1 className='text-white xs:text-[39px] text-[25px] font-[TimesNewRoman]'>Random User Generator</h1>
      </div>
      <div className=' items-center text-center mt-[10px]'>
        <p className='text-white xs:text-[20px] text-[19px]  font-[TimesNewRoman]'>A free, <a href="https://github.com/RandomAPI/Randomuser.me-Node" className='underline text-blue-600'>open-source</a> API for generating random user data. Like Lorem Ipsum, but for people.</p>
        <div className='flex justify-center mt-[20px]'><FaXTwitter  className='text-[blue] mt-[3px]' size={20}/><p className='text-white ml-[10px]'>Follow us <a href="#" className='text-blue-600 underline'>@randomapi</a></p> </div>
        
      </div>
     
    </div>
  )
}

export default Apigenerator