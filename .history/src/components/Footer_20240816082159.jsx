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
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold'>Solutions</h6>
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