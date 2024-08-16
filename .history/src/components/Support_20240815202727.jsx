import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'
function Support() {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='/' />
        </div>
        <div className='w-max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-boldpy-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>With a global community of skilled professionals, we ensure top-notch support and continuous innovation. Join thousands
                 who trust us to elevate their development projects to new heights</p>
            </div>

            <div>
                 <div>
                    <PhoneIcon/>
                    <h3>Sales</h3>
                    <p>With a global community of skilled professionals, we ensure top-notch support and continuous innovation. Join thousands who trust us to elevate their development projects to new heights</p>
                 </div>
                 <div>
                    <p>Contact Us <ArrowSmRightIcon/> </p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Support