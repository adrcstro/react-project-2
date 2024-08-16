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
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                     <li className='py-1'>Analytics</li>
                     <li className='py-1'>Commerce</li>
                     <li className='py-1'>Data</li>
                     <li className='py-1'>Cloud</li>
                     <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                     <li className='py-1'>Pricing</li>
                     <li className='py-1'>Documentation</li>
                     <li className='py-1'>Guides</li>
                     <li className='py-1'>API Status</li>
                   
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                     <li className='py-1'>Analytics</li>
                     <li className='py-1'>Commerce</li>
                     <li className='py-1'>Data</li>
                     <li className='py-1'>Cloud</li>
                     <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                     <li className='py-1'>Analytics</li>
                     <li className='py-1'>Commerce</li>
                     <li className='py-1'>Data</li>
                     <li className='py-1'>Cloud</li>
                     <li className='py-1'>Marketing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer