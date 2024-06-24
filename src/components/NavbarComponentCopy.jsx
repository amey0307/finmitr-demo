import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function NavbarComponentCopy() {
    //Navbar Animation on bigger screens
    window.innerWidth > 700 &&
        useGSAP(() => {
            gsap.fromTo('.navbar',
                {
                    gap: 40,
                    maxWidth: window.screen.width,
                    minWidth: 'fit-content',
                    duration: 1,
                },
                {
                    scrollTrigger: {
                        trigger: '.navbar',
                        start: 'top top',
                        end: '200 -200%',
                        scrub: 1,
                        markers: false,
                    },
                    y: -10,
                    gap: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                })
        })

    return (
        <nav className='flex w-full h-10 fixed font-vietnam z-10'>

            {/* FINMITR LOGO */}
            <div className='md:flex hidden ml-4 mt-4 left-0 bg-[#849BEB] rounded-full px-6 navbar z-10 w-fit h-10 text-white items-center'>
                <h1 className='lg:text-xl'>FINMITR</h1>
            </div>

            {/*DYNAMIC NAVBAR`` */}
            <div className='flex md:gap-5 gap-3 mt-4 mx-auto bg-[#849BEB] rounded-full items-center px-6 navbar z-10 w-fit h-10 text-white md:text-lg text-xs cursor-pointer'>
                <a href='#hero' className='hover:scale-110 transition-all'>HOME</a>
                <a href='#feature' className='hover:scale-110 transition-all'>FEATURE</a>
                <button className='p-[4px] px-3 rounded-l-full rounded-r-full border-1 border-white text-nowrap text-black bg-white'>INSTALL APP</button>
                <a href='#vision' className='hover:scale-110 transition-all'>VISION</a>
                <a href='#contact' className='hover:scale-110 transition-all'>CONTACT</a>
            </div>
        </nav>
    )
}

export default NavbarComponentCopy
