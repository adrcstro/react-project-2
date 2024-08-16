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
       <div className='flex flex-col justify-center md-items-start w-full px-2 py-8'>
        <p>Unique Sequencing & Production</p>
        <h1>Cloude Management</h1>
        <p>This is our Tech brand</p>
        <button>Get Started</button>
       </div>
</div>


    </div>
  )
}

export default Hero