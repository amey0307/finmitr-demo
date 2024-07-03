import React from 'react'
import growth from '../assets/vision/growth.svg'
import folder from '../assets/vision/folder.svg'
import wallet from '../assets/vision/wallet.svg'
import { Link } from 'react-router-dom'

function VisionInfo() {
    return (
        <div className='min-h-[70vh] flex flex-col gap-36 overflow-hidden mt-20'>
            <div className='flex lg:gap-[20rem] md:gap-[10rem] gap-10 lg:px-[16rem] md:px-20 px-10'>
                <div className='flex flex-col justify-between items-start'>
                    <h4 className='md:text-2xl text-sm'>Our Vision</h4>
                    <h1 className='md:text-3xl text-xs'>We Are The Team Of Enthusiasts</h1>
                </div>
                <div className='flex flex-col gap-10 justify-between items-start'>
                    <p className='md:text-lg text-xs text-balance'>Our mission is to demystify financial management in India, providing intuitive and powerful tools to enhance financial health for everyone. We aim to be the financial compass for navigating economic well-being.</p>
                    <Link to={'contact-us'}>
                        <button className='bg-[#849BEB] md:p-4 p-2 rounded-md hover:scale-105 transition-all ease-linear duration-100'>
                            CONTACT US
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <div className='md:flex md:flex-row flex-col gap-10 md:px-[5rem] justify-center -mt-10'>
                    <div className='flex flex-col gap-5 justify-center items-center bg-white text-black lg:p-4 md:w-[25vw] md:h-[25vh] w-[65vw] mx-auto m-10 p-4 rounded-xl'>
                        <img src={growth} alt="" className='w-20 h-20' />
                        <h2 className='text-2xl'>Growth</h2>
                        <p className='lg:text-lg md:text-sm text-sm text-center text-balance'>We believe in the power of growth. We are committed to helping our customers grow their wealth and achieve financial success.</p>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-center bg-white text-black p-4 md:w-[25vw] md:h-[25vh] w-[65vw] m-10 mx-auto rounded-xl'>
                        <img src={folder} alt="" className='w-20 h-20' />
                        <h2 className='text-2xl'>Transparency</h2>
                        <p className='lg:text-lg md:text-sm text-sm text-center text-balance'>We believe in the power of growth. We are committed to helping our customers grow their wealth and achieve financial success.</p>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-center bg-white text-black p-4 md:w-[25vw] md:h-[25vh] w-[65vw] m-10 mx-auto rounded-xl'>
                        <img src={wallet} alt="" className='w-20 h-20' />
                        <h2 className='text-2xl'>Security</h2>
                        <p className='lg:text-lg md:text-sm text-sm text-center text-balance'>We believe in the power of growth. We are committed to helping our customers grow their wealth and achieve financial success.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionInfo
