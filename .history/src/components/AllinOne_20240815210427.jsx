import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
function AllinOne() {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
            <p className='text-3xl py-8 text-gray-500 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos eligendi
            totam nulla. At expedita sit facere tempore accusamus nemo.</p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            <div>
                <div className='flex'>
                    <CheckIcon className='w-7 mr-4 text-green-600'/>
                    <div className=''>
                        <h3 className='font-bold text-lg'>Notification</h3>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos eligendi
                        totam nulla. At expedita sit facere tempore accusamus nemo.</p>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AllinOne