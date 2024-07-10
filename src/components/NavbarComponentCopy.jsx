// src/components/NavbarComponentCopy.jsx

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
import Logo from "../assets/images/Transparent-PNG-file.png";
function NavbarComponentCopy() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (sidebarOpen) {
            setAnimationClass('slide-in ');
        } else {
            setAnimationClass('slide-out blur');
        }
    }, [sidebarOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 700);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Navbar Animation on bigger screens
    if (!isSmallScreen) {
        useGSAP(() => {
            gsap.fromTo('.navbar', {
                gap: 40,
                maxWidth: window.screen.width,
                minWidth: 'fit-content',
                duration: 1,
            }, {
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
            });
        });
    }

    const handleClick = addEventListener('click', (e) => {
        try {
            const target = e.target.id;
            const targetElement = document.querySelector(`#${target}-v`);
            const offset = 100; // Space you want above the element
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        } catch (e) {
            return;
        }
    });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <nav className='fixed w-full z-10' >
            <div className={`flex w-full h-10 font-vietnam`}>
                {/* FINMITR LOGO */}
                <div className='md:flex hidden ml-4 mt-4 left-0 bg-[#849BEB] rounded-full px-6 navbar z-10 w-fit h-10 text-white items-center hover:scale-105 transition-all ease-linear duration-100'>
                    <Link to='/'><h1 className='lg:text-xl'>FINMITR</h1></Link>
                </div>

                {/* Navbar for larger screens */}
                {!isSmallScreen && (
                    <div className='flex md:gap-5 gap-3 mt-4 mx-auto bg-[#849BEB] rounded-full items-center md:px-6 px-2 navbar z-10 w-fit h-10 text-white md:text-[16px] text-xs cursor-pointer'>
                        <Link to='/'><a id='hero' className='hover:scale-110 transition-all md:block hidden'>HOME</a></Link>
                        <Link to={'/'}><p id='feature' className='hover:scale-110 transition-all md:block hidden'>FEATURE</p></Link>
                        <Link to={'/'}><p id='services' className='hover:scale-110 transition-all'>SERVICES</p></Link>
                        <Link to={'/'}><p id='contact' className='hover:scale-110 transition-all'>CONTACT</p></Link>
                        <Link to='/'><p id='connect' className='hover:scale-110 transition-all'>CONNECT</p></Link>
                        <button className='p-[4px] px-3 py-2 rounded-l-full rounded-r-full border-1 border-white text-nowrap text-black bg-white'>INSTALL APP</button>
                    </div>
                )}

                {/* Toggle button for small screens */}
                {isSmallScreen && (
                    <div>
                        <img className="logoSidebar2" src={Logo} alt="img"></img>
                        <button onClick={toggleSidebar} className='ml-auto mt-2 h-12 w-20 mr-4  text-white bg-[#849BEB] p-3 rounded menu'>
                            {sidebarOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>


                )}
            </div>

            {/* Sidebar for small screens */}
            {isSmallScreen && sidebarOpen && (
                <div className={`div-slide ${animationClass}`}>
                    <div className='sdbar'>
                        <div className='fixed top-0 p-4  left-0 w-3/4 h-full bg-black-1000  z-20 flex flex-col items-start p-3 text-white'>
                            <img className="logoSidebar" src={Logo} alt="img"></img>
                            <Link to='/' onClick={toggleSidebar}><p id='hero' className='it hover:scale-110 transition-all'>HOME</p></Link>
                            <Link to='/' onClick={toggleSidebar}><p id='feature' className='it hover:scale-110 transition-all'>FEATURE</p></Link>
                            <Link to='/' onClick={toggleSidebar}><p id='services' className='it hover:scale-110 transition-all'>SERVICES</p></Link>
                            <Link to='/' onClick={toggleSidebar}><p id='contact' className=' it hover:scale-110 transition-all'>CONTACT</p></Link>
                            <Link to='/' onClick={toggleSidebar}><p id='connect' className='it hover:scale-110 transition-all'>CONNECT</p></Link>
                            <button className='p-2 px-3 py-2  rounded  border-1 border-white text-black bg-white install'>INSTALL APP</button>
                        </div>

                    </div>
                </div>


            )}
        </nav>
    );
}

export default NavbarComponentCopy;
