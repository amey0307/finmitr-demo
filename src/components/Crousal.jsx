import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export default function Carousel({
    children: slides,
    autoSlide = true,
    autoSlideInterval = 10000,
}) {

    useGSAP(() => {

        gsap.from(`.this`, {
            width: '600px',
        })
        gsap.to(`.this`, {
            width: '10px',
            duration: 10,
            repeat: -1,
            ease: "circ.out"
        })

    })

    const [curr, setCurr] = useState(0)
    const boxRef = useRef(null);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        //change the height of the carousel by changing the lg:h-[50vh] value
        <div className="flex lg:flex-row flex-col justify-evenly lg:items-end items-center bg-[#3515355b] py-10 drop-shadow-purple-dark">
            <div className="overflow-hidden relative lg:mx-10 rounded-lg lg:w-[50vw] w-[90vw] lg:h-fit md:h-fit h-[20vh]">
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {slides}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                        onClick={prev}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                        <ChevronLeft size={30} />
                    </button>
                    <button
                        onClick={next}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                        <ChevronRight size={30} />
                    </button>
                </div>

                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">

                        <div
                            className={`
              transition-all bg-white rounded-full this w-10 h-2
            `}
                        />

                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end gap-10 rounded-2xl px-10 lg:w-[40vw] w-[100vw] lg:mt-0 mt-10">
                {
                    slides.map((slide, i) => (
                        <div className={`flex rounded-lg overflow-hidden transition-all duration-700 cursor-pointer gap-0 border object-cover ${curr === i ? "w-44 rounded-xl" : "w-20 opacity-50"}`} onClick={() => {
                            setCurr(i)
                        }} key={i}>
                            {slide}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}