import React from 'react'
import {PhoneIcon, ArrowSmRiqhtIcon} from '@heroicons/react/outline';
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
                <p>With a global community of skilled professionals, we ensure top-notch support and continuous innovation. Join thousands
                 who trust us to elevate their development projects to new heights</p>
            </div>
        </div>
    </div>
  )
}

export default Support