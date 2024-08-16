import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'
function Pricing() {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
        <div>
            <h2>Pricing</h2>
            <h3>The right price for your
            research.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Distinctio soluta recusandae
             raesentium magni reprehenderit voluptatibus.</p>
        </div>
       <div>
        <div>
            <span>Standard</span>
            <div>
                <p>$49<span>/mo</span></p>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Distinctio soluta recusandae
             raesentium magni reprehenderit voluptatibus.</p>
             <div>
                <p><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem Ipsum dolar lorem</p>
                <p><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem Ipsum dolar lorem</p>
                <p><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem Ipsum dolar lorem</p>
                <p><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem Ipsum dolar lorem</p>
                <p><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem Ipsum dolar lorem</p>
                <button>get Started</button>
             </div>
        </div>
       </div>



        </div>
    </div>
  )
}

export default Pricing