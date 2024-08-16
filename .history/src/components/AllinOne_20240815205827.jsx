import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
function AllinOne() {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl'>All-In-One Platform</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos eligendi
            totam nulla. At expedita sit facere tempore accusamus nemo.</p>
        <div>
            <div>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600'/>
                    <div>
                        <h3>Notification</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos eligendi
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