import React from 'react'

function About() {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
            <p className='text-3xl py6 text-gray-500 px-3'>Trusted by developers across the world, our platform stands as a reliable choice for building robust
             applications. With a global community of skilled professionals.</p>
          </div>

          <div className='grid grid-cols-1'>
             <div>
              <p>100%</p>
              <p>Completion</p>
             </div>
             <div>
              <p>24/7</p>
              <p>Delivery</p>
             </div>
             <div>
              <p>100K</p>
              <p>Transaction</p>
             </div>
          </div>
        </div>  
    </div>
  )
}

export default About