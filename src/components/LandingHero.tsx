import React from 'react'
import Button from './Button'

const LandingHero = () => {
  return (
    <div className=' bg-gradient-to-b from-[#00816B] to-[#002620] h-screen'>
          <header className="w-full px-3 md:px-8 py-4 lg:py-20">
        <div className="md:hidden">
          {/* <HeaderSearchComp /> */}
        </div>
        <br />
        <div
          style={{ flex: 1 }}
          className="relative flex flex-1 justify-between gap-3 max-w-7xl mx-auto md:py-14 md:-mt-10"
        >
          <div
            style={{ flex: 2.6 }}
            className="flex flex-col items-start gap-[10px] !w-[533px]"
          >
            <p className="text-white md:text-sm font-normal text-left border border-white rounded-[100px] px-2 p-1">Vetted solar technicians, instant connections</p>
            <h1 className="w-full text-white text-[25px] md:text-[52px] font-medium leading-[38px] sm:leading-[60px] tracking-normal text-left">
            Connect with <span className='text-yellow-101'>skilled local solar workforce</span> in record time!
            </h1>
            <p className="text-white md:text-[20px] font-normal text-left">Match your solar projects with vetted and trained freelancers closest to your project location.</p>

            <Button stylet="text-[#02021C] bg-yellow-101 text-base font-medium leading-[20px] p-1 rounded-[32px]" title='See Solar Technician Footprint' />
          </div>

          <div style={{ flex: 3 }} className="hidden md:flex flex-1">
          <img
              src="svg/hero1.svg"
              className="hidden md:block"
              alt=""
            />
          </div>
          <div
            style={{ flex: 3 }}
            className="absolute hidden md:flex top-5 -right-[70px]"
          >
            <img
              src="svg/hero1.svg"
              className="block md:hidden"
              alt=""
            />
          </div>
        </div>
      </header>
      <div className="flex items-center md:hidden w-full pt-[40px] pb-20 px-3">
        <img
          src={"svg/hero1.svg"}
          alt="world map"
          className=""
        />
      </div>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
      </div>
    </div>
  )
}

export default LandingHero