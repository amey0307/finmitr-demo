import React, { useRef, useState } from 'react'
import bg from '../assets/recharge/bg.svg'
import ball from '../assets/recharge/ball.svg'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import mobile from '../assets/recharge/mobile.svg'
import bulb from '../assets/recharge/bulb.svg'
import redar from '../assets/recharge/redar.svg'
import gas from '../assets/recharge/gas.svg'
import five_g from '../assets/recharge/five_g.svg'
import fees from '../assets/recharge/fees.svg'
import all from '../assets/recharge/all.svg'
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const logos = [
    {
        src: mobile,
        content: "Recharge Prepaid Mobiles >"
    },
    {
        src: bulb,
        content: "Pay Electricity Bills >"
    },
    {
        src: redar,
        content: "Recharge DTH Connections >"
    },
    {
        src: gas,
        content: "Book gascylinder >"
    },
    {
        src: five_g,
        content: "Pay Broadband & LandlineBills >"
    },
    {
        src: fees,
        content: "Pay Education Fees >"
    },
    {
        src: all,
        content: "All Payment service >"
    }
]

const logosAll = [
    {
        src: mobile,
        content: "Recharge Prepaid Mobiles >"
    },
    {
        src: bulb,
        content: "Pay Electricity Bills >"
    },
    {
        src: redar,
        content: "Recharge DTH Connections >"
    },
    {
        src: gas,
        content: "Book gascylinder >"
    },
    {
        src: five_g,
        content: "Pay Broadband & LandlineBills >"
    },
    {
        src: fees,
        content: "Pay Education Fees >"
    },
    {
        src: mobile,
        content: "Recharge Prepaid Mobiles >"
    },
    {
        src: bulb,
        content: "Pay Electricity Bills >"
    },
    {
        src: redar,
        content: "Recharge DTH Connections >"
    },
    {
        src: gas,
        content: "Book gascylinder >"
    },
    {
        src: five_g,
        content: "Pay Broadband & LandlineBills >"
    },
    {
        src: fees,
        content: "Pay Education Fees >"
    },
    {
        src: mobile,
        content: "Recharge Prepaid Mobiles >"
    },
    {
        src: bulb,
        content: "Pay Electricity Bills >"
    },
    {
        src: redar,
        content: "Recharge DTH Connections >"
    },
    {
        src: gas,
        content: "Book gascylinder >"
    },
    {
        src: five_g,
        content: "Pay Broadband & LandlineBills >"
    },
    {
        src: fees,
        content: "Pay Education Fees >"
    },
]

function Recharge() {
    const ballRef = useRef(null);
    const [openModal, setOpenModal] = useState(false);

    useGSAP(() => {
        gsap.from(ballRef.current, {
            rotate: 0,
            duration: 10,
            ease: 'none',
            yoyo: true
        })
        gsap.to(ballRef.current, {
            rotate: -360,
            duration: 10,
            repeat: -1,
            ease: 'none',
        })
    })

    return (
        <div className='w-full relative overflow-hidden'>
            <h1 className='mx-auto text-center md:text-[40px] text-3xl'>Recharge And Pay Bills</h1>

            <img src={bg} alt="" className='absolute -z-10' />
            <div className='w-fit mt-10 mx-auto translate-x-2'>
                <img src={ball} alt="" className='lg:h-full w-fit h-[20vh] ' ref={ballRef} />
            </div>

            <div className='flex h-[40vh] gap-4 justify-evenly overflow-scroll md:flex-nowrap flex-wrap'>
                {
                    logos.map((logo, i) => (
                        i !== 6 ?
                            <div className='md:w-full w-[35vw] flex flex-col items-center justify-center'>
                                <div className='md:h-20 md:w-20 h-10 w-10 bg-gradient-to-b from-black to-[#7A5393] rounded-full mx-auto relative mt-10 cursor-pointer hover:scale-110 transition-all duration-300' key={i}>
                                    <img src={logo.src} alt="" className='md:h-8 md:w-8 h-5 w-5 mx-auto relative md:top-6 top-3' />
                                </div>

                                <h1 className='md:text-xl text-xs h-10 md:w-[7vw] w-fit mx-auto mt-10 text-center'>{logo.content}</h1>
                            </div>
                            :
                            <div className='md:w-full w-[35vw] flex flex-col items-center justify-center'>
                                <div className='md:h-20 md:w-20 h-10 w-10 bg-gradient-to-b from-black to-[#7A5393] rounded-full mx-auto relative mt-10 cursor-pointer hover:scale-110 transition-all duration-300 overflow-hidden' key={i} onClick={() => {
                                    setOpenModal(true);
                                    window.scroll = false;
                                }}>
                                    <img src={logo.src} alt="" className='md:h-8 md:w-8 h-5 w-5 mx-auto relative md:top-6 top-3' />
                                </div>

                                <h1 className='md:text-xl text-xs h-10 md:w-[7vw] w-fit mx-auto mt-10 text-center'>{logo.content}</h1>
                            </div>
                    ))
                }

            </div>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Body>
                    <div className="text-center min-h-[80vh] h-fit bg-gradient-to-tl from-black to-[#25052e] rounded-lg">

                        <div className='flex h-fit gap-4 justify-evenly flex-wrap mb-10'>
                            {
                                logosAll.map((logo, i) => (
                                    <div className='md:w-[10vw] w-[15vw] md:h-[25vh] h-[20vh] flex flex-col items-center justify-center'>
                                        <div className='md:h-20 md:w-20 h-10 w-10 bg-gradient-to-b from-black to-[#7A5393] rounded-full mx-auto relative mt-10 cursor-pointer hover:scale-110 transition-all duration-300' key={i}>
                                            <img src={logo.src} alt="" className='md:h-8 md:w-8 h-5 w-5 mx-auto relative md:top-6 top-3' />
                                        </div>

                                        <h1 className='md:text-lg text-xs h-10 md:w-[7vw] w-fit mx-auto md:mt-10 mt-4 text-center'>{logo.content}</h1>
                                    </div>
                                ))
                            }

                        </div>
                        <Button onClick={() => setOpenModal(false)} className='bg-purple-700 relative md:top-[15vh] md:left-[45vw] mx-auto bottom-4'>
                            Cancel
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Recharge
