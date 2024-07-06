import React from 'react'
import logo from '/logo.svg'
// import { InstagramIcon } from 'react-icons'
// import { TwitterIcon } from 'react-icons'
const Footer = () => {
  return (
    <div className='bg-primary w-full'>
      <div className="mx-auto w-[90%]">
      <div className="flex flex-col gap-4 py-4 w-full border-b border-secondary">
    <img src={logo} alt="Timbucloud logo" className='w-[335px] md:w-[622px]'/>
    <p className="text-xl font-normal text-foreground md:w-[624px]">Your one-stop tech shop. The biggest personal computing retailer in West Africa</p>
    </div>
    <div className="flex justify-between items-center font-normal text-sm text-foreground">
      <div className="flex gap-2 items-center">
        {/* <TwitterIcon/>
        <InstagramIcon/> */}
        
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className='hover:bg-foreground hover:text-background p-1'>Terms of Service</p>
      </div>
    </div>

      </div>

    </div>
  )
}

export default Footer