import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
<div className='grid md:grid-col-2 max-w-[1240px] m-auto'>
       <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <p className='text-2xl'>Unique Sequencing & Production</p>
        <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
        <p className='text-2xl'>This is our Tech brand</p>
        <button className='py-3 px-6 sm-[60%] my-4 '>Get Started</button>
       </div>
       <div>
    <img className='w-full' src={bgImg} alt='/' />
       </div>
<div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]'>
  <p>Data Services</p>
  <div>
    <p>Icon. App Security</p>
    <p>Icon. Dashboard</p>
    <p>Icon. Cloud Data</p>
    <p>Icon. API</p>
  </div>
</div>




</div>
    </div>
  )
}

export default Hero