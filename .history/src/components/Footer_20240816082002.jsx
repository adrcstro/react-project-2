import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa';


function Footer() {
  return (
    <div className='w-full mt-24 bg-slate-100 text-gray300 py-8 px2'>
        <div>
            <div>
                <h6>Solutions</h6>
                <ul>
                     <li>Analytics</li>
                     <li>Commerce</li>
                     <li>Data</li>
                     <li>Cloud</li>
                     <li>Marketing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer