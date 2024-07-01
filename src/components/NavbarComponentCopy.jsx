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

    const handleClick = addEventListener('click', (e) => {
        try {
            const target = e.target.id
            const targetElement = document.querySelector(`#${target}-v`)
            console.log(targetElement)
            const offset = 100; // Space you want above the element
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        } catch (e) {
            return
        }
    }
    )

    return (
        <nav className='flex w-full h-10 fixed font-vietnam z-10'>

            {/* FINMITR LOGO */}
            <div className='md:flex hidden ml-4 mt-4 left-0 bg-[#849BEB] rounded-full px-6 navbar z-10 w-fit h-10 text-white items-center'>
                <h1 className='lg:text-xl'>FINMITR</h1>
            </div>

            {/*DYNAMIC NAVBAR`` */}
            <div className='flex md:gap-5 gap-3 mt-4 md:mx-auto mx-10 bg-[#849BEB] rounded-full items-center px-6 navbar z-10 w-fit h-10 text-white md:text-[16px] text-xs cursor-pointer'>
                <a id='hero' className='hover:scale-110 transition-all md:block hidden'>HOME</a>
                <p id='feature' className='hover:scale-110 transition-all md:block hidden'>FEATURE</p>
                <p id='services' className='hover:scale-110 transition-all'>SERVICES</p>
                <p id='vision' className='hover:scale-110 transition-all'>VISION</p>
                <p id='contact' className='hover:scale-110 transition-all'>CONTACT</p>
                <button className='p-[4px] px-3 py-2 rounded-l-full rounded-r-full border-1 border-white text-nowrap text-black bg-white'>INSTALL APP</button>
            </div>
        </nav>
    )
}

export default NavbarComponentCopy
