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
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-center text-slate-300 '>With a global community of skilled professionals, we ensure top-notch support and continuous innovation. Join thousands
                 who trust us to elevate their development projects to new heights</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>       
            <div className='bg-white rounded-xl shadow-2xl'>
                 <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Sales</h3>
                    <p className='text-gray-600 text-xl'>With a global community of skilled professionals, we ensure top-notch support and continuous innovation. Join thousands who trust us to elevate their development projects to new heights</p>
                 </div>
                 <div>
                    <p>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Support