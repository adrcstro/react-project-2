import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'
function Support() {
  return (
    <div>
        <div>
            <img src={supportImg} alt='/' />
        </div>
        <div>
            <div>
                <h2>Support</h2>
                <h3>Finding the right team</h3>
                <p>With a global community of skilled professionals, we ensure top-notch support and continuous innovation. Join thousands
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