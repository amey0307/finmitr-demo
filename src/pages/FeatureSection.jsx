import React, { useEffect } from 'react'
import ai_mentor from '../assets/features/ai_mentor.svg'
import bank from '../assets/features/bank.svg'
import dashboard from '../assets/features/dashboard.svg'
import tax from '../assets/features/tax_automation.svg'

function FeatureSection() {

    //parallax effect
    window.addEventListener('mousemove', (e) => {
        const boxs = document.querySelectorAll('.box');
        boxs.forEach(box => {
            const position = box.getAttribute('value');
            const x = (window.innerWidth - e.clientX * position) / 200;
            const y = (window.innerHeight - e.clientY * position) / 200;

            box.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    })

    return (
        <section className='md:px-[20vw] px-4 py-10'>
            <div className='grid grid-cols-10 grid-row-2 gap-10'>
                <div value="-1" className='col-span-5 md:p-10 md:py-[5rem] p-4 bg-[#716f6f16] rounded-3xl drop-shadow-purple sm:h-[25vh] lg:min-h-[30rem] md:h-[30rem] min-h-[13rem] shadow-[0_0px_20px_-3px_#849BEB] hover:shadow-[0_0px_30px_-8px_#849BEB] transition-all ease-linear box'>
                    <div className='flex justify-center items-center md:gap-8 gap-2 md:mb-10 mb-4'>
                        <img src={bank} alt="" className='h-3 w-3 md:h-10 md:w-10' />
                        <h1 className='md:text-lg lg:text-3xl text-xs'>Unified Finance Hub</h1>
                    </div>
                    <p className='md:p-4 md:text-center lg:text-lg  md:text-sm text-xs text-slate-400 sm:text-balance'>Your one-stop solution to manage all you financial needs. Connect accounts, track expenses, and manage investments withease. It' s the ultimate tool to centralize and  simplify your financial life.</p>
                </div>
                <div value="-2" className='col-span-5 md:p-10 md:py-[5rem] p-4 bg-[#716f6f16] rounded-3xl drop-shadow-purple sm:h-[25vh] lg:min-h-[30rem] md:h-[30rem] min-h-[13rem] shadow-[0_0px_20px_-3px_#849BEB] hover:shadow-[0_0px_30px_-8px_#849BEB] transition-all ease-linear box'>
                    <div className='flex justify-center items-center md:gap-8 gap-2 md:mb-10 mb-4'>
                        <img src={dashboard} alt="" className='h-3 w-3 md:h-10 md:w-10' />
                        <h1 className='md:text-lg lg:text-3xl text-xs'>Unified Finance Hub</h1>
                    </div>
                    <p className='md:p-4 md:text-center lg:text-lg  md:text-sm text-xs text-slate-400 sm:text-balance'>Track your financial health with our dashboard. See your cash flow, investments, and overall financial status in realtime to stay aligned with your goals.</p>
                </div>
                <div value="3" className='md:col-span-4 col-span-5 lg:p-10 lg:pt-[5rem] md:p-4 md:py-[5rem] p-4 bg-[#716f6f16] rounded-3xl drop-shadow-purple sm:h-[25vh] lg:min-h-[30rem] md:h-fit min-h-[13rem] shadow-[0_0px_20px_-3px_#849BEB] hover:shadow-[0_0px_30px_-8px_#849BEB] transition-all ease-linear box'>
                    <div className='flex justify-center items-center md:gap-8 gap-2 md:mb-10 mb-4'>
                        <img src={ai_mentor} alt="" className='h-3 w-3 md:h-10 md:w-10' />
                        <h1 className='md:text-lg lg:text-3xl text-xs'>Unified Finance Hub</h1>
                    </div>
                    <p className='md:p-4 md:text-center lg:text-lg  md:text-sm text-[10px] text-slate-400 text-balance'>Meet FinGuru, your AI financial advisor that provides personalized, easy-tounderstand advice for smarter financial decisions.</p>
                </div>
                <div value="1" className='md:col-span-6 col-span-5 md:p-10 md:py-[5rem] p-4 bg-[#716f6f16] rounded-3xl drop-shadow-purple sm:h-[25vh] lg:min-h-[30rem] md:h-full min-h-[13rem] shadow-[0_0px_20px_-3px_#849BEB] hover:shadow-[0_0px_30px_-8px_#849BEB] transition-all ease-linear box'>
                    <div className='flex justify-center items-center md:gap-8 gap-2 md:mb-10 mb-4'>
                        <img src={tax} alt="" className='h-3 w-3 md:h-10 md:w-10' />
                        <h1 className='md:text-lg lg:text-3xl text-xs'>Unified Finance Hub</h1>
                    </div>
                    <p className='md:p-4 md:text-center lg:text-lg  md:text-sm text-xs text-slate-400 sm:text-balance'>Our smart system takes the stress out of tax season. Get accurate, automated tax filing that ensures you're always ahead of deadlines and maximizing deductions.Tax time is now hassle-free.</p>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
