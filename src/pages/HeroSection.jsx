import React from 'react'
import bg_radial_gradient from '../assets/hero/bg_radial_gradient.svg'
import shape_left from '../assets/hero/shape_left.svg'
import shape_right from '../assets/hero/shape_right.svg'

function Hero() {
    return (
        <div className='overflow-hidden'>
            <img src={bg_radial_gradient} className='absolute lg:top-[-20vh] md:top-[-15vh] top-[-7vh] -z-10' alt="" />
            <div className='h-[15vh] w-[15vw] absolute top-[20vh]'>
                <img src={shape_left} alt="" className='opacity-55 hover:opacity-100 transition-all' />
            </div>

            <div className='h-[15vh] w-[15vw] absolute top-[20vh] right-0'>
                <img src={shape_right} alt="" className='opacity-55 hover:opacity-100 transition-all' />
            </div>

            <div className='lg:w-[50rem] md:w-[30rem] w-[20rem] lg:mt-[30vh] md:mt-[25vh] mt-[20vh] lg:mx-[20vw] sm:mx-[10vw] px-[10vw]'>
                <h1 className='md:text-[56px] text-[22px] text-white font-semibold'>Our Mission</h1>
                <p className='text-white text-balance font-extralight lg:text-[16px] md:text-[14px] text-[10px]'>Is to demystify financial management in Indiaproviding intuitive and powerful tools to enhance financial health for everyone. We aim to be the financial compass for navigating economic well-being.</p>
            </div>

            <div className=''>
                <button className='bg-[#849BEB] p-2 rounded-lg ml-[55vw] mt-[5vh] mb-2 cursor-pointer hover:scale-105 transition-all'><p className='lg:text-[18px] text-[10px]'>Let's Get Started</p></button>
            </div>
        </div>
    )
}

export default Hero
