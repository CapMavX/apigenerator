import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function Cardapi() {
const [info, setInfo] = useState(null)
const [field, setField] = useState('')
const [text, setText] = useState('Hi my name is')

useEffect(() =>{
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    console.log(info)
    const user = data.results[0];
    setInfo(user)
    setField(` ${user.name?.title} ${user.name?.first} ${user.name?.last}`)
  })

},[])
useEffect(() => {
  console.log('Updated:', info)
},[info])

const handleMouseEnter = (dataKey) => {
  
  if (!info) return; 


  switch (dataKey) {
      case 'name':
        setText('Hi my name is ')
          setField(`${info.name?.title} ${info.name?.first} ${info.name?.last}`);
        
          break;
          case 'email':
          setField(info.email)
          setText('Hi my email is')
          break;
          case 'dob':
            setField(new Date(info.dob?.date).toLocaleDateString());
            setText('Hi my dob is')
            break;
            case 'location':
              setField(`${info.location?.street.number} ${info.location?.street.name}`)
              setText('Hi my location is')
              break;
          case 'phone':
            setField(info.phone)
            setText('Hi my number is')
            break;
            case "password":
              setText('Hi my password is')
              setField(info.login?.password)
  
            }


};

  return (
    <div className=' mt-[20px] sm:mt-[120px] lg:mt-[150px] xl:mt-[100px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[ghostwhite] w-[300px] sm:w-fit lg:w-fit   p-4 rounded' >
{info ? (
  <div className='flex flex-col items-center mt-[10px]'>
  <img src={info.picture.large} alt="" className=' w-[90px] sm:w-[130px] lg:w-[130px] rounded-[300px] '/>
  <p className='text-[15px] sm:text-[20px] lg:text-[20px] mt-[20px] text-[grey]'>{text}</p>
  <div className='flex gap-[5px]'>
  
  <h1 className=' text-[20px] sm:text-[30px] lg:text-[30px]text-[30px] font-[TimesNewRoman]'>{field}</h1>

  </div>
  <div className=' flex items-[center] gap-[10px] sm:gap-[40px] lg:gap-[40px] ml-[30px] mr-[30px] mt-[30px]'>
  <CgProfile onMouseEnter={()=> handleMouseEnter('name')} className='text-[lightgrey] hover:text-[green]' size={31}/>
  <CiMail  onMouseEnter={()=> handleMouseEnter('email')} size={31} className='text-[lightgrey] hover:text-[green]'/>
  
  <SlCalender onMouseEnter={()=> handleMouseEnter('dob')}  size={31} className='text-[lightgrey] hover:text-[green]' />
  <FaMapLocation onMouseEnter={()=> handleMouseEnter('location')}  size={31} className='text-[lightgrey] hover:text-[green]'/>
  <FaPhoneAlt onMouseEnter={()=> handleMouseEnter('phone')}  size={31} className='text-[lightgrey] hover:color-[green]' />
  <FaLock onMouseEnter={()=> handleMouseEnter('password')}  size={31} className='text-[lightgrey] hover:text-[green]' />
 
  </div>
  </div>
  
):(<p>Loading.....</p>)}
 
    </div>
  );
}

export default Cardapi