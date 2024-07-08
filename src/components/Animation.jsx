import React from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'


function Animation() {
    useGSAP(() => {
        gsap.from('.red', {
            scrollTrigger: {
                trigger: '.bg-red-500',
                start: 'center bottom',
                end: 'center center',
                scrub: 1,
            },
            scale: 0,
            opacity: 0,
            top: '100%',
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from('.green', {
            scrollTrigger: {
                trigger: '.bg-red-500',
                start: 'center bottom',
                end: 'center center',
                scrub: 1,
            },
            scale: 0,
            opacity: 0,
            top: '100%',
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from('.blue', {
            scrollTrigger: {
                trigger: '.bg-red-500',
                start: 'center bottom',
                end: 'center center',
                scrub: 1,
            },
            opacity: 0,
            scale: 0,
            top: '100%',
            duration: 1,
            ease: 'power1.inOut'
        })

        gsap.from('.box-c', {
            scrollTrigger: {
                trigger: '.bg-red-500',
                start: 'center bottom',
                end: 'center center',
                scrub: 1,
            },
            rotate: 360,
            scale: 0,
            ease: 'power1.inOut'
        })

        gsap.from('.txt', {
            scrollTrigger: {
                trigger: '.bg-red-500',
                start: 'center 45%',
                end: 'center 30%',
                scrub: 1
            },
            opacity: 0
        })
    })

    return (
        <div className='w-full mx-auto'>
            <div className='box-c w-[40vw] h-[40vh] mx-auto relative'>
                <div className='red w-52 h-52 rounded-full bg-[#ff38388a] absolute top-[10%] lg:right-[36%] md:right-[30%] right-[15%]'></div>
                <div className='green w-52 h-52 rounded-full bg-[#71f36d6a] absolute top-[35%] right-[47%]'></div>
                <div className='blue w-52 h-52 rounded-full bg-[#446dff7d] absolute top-[35%] left-[47%]'></div>
                <h1 className='txt absolute top-[52%] right-[10%] text-xl'>Finmitr</h1>
                <h1 className='txt absolute top-[52%] left-[10%] text-xl'>Finmitr</h1>
                <h1 className='txt absolute top-[52%] left-[46%] text-xl'>Finmitr</h1>
                <h1 className='txt absolute top-2 left-[42%] text-xl'>Finmitr</h1>
            </div>
        </div>
    )
}

export default Animation
