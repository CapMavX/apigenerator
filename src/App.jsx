import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apigenerator from './apigenerator'
import Cardapi from './cardapi'

function App() {


  return (
    <div className='flex flex-col gap-[20px]'>
      <Apigenerator/>
      <Cardapi/>
    </div>
  )
}

export default App
