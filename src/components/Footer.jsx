import React from 'react'
import logo from '/logo.svg'
import fb from '../assets/fb.png'
import x from '../assets/x.png'
import ig from '../assets/ig.png'


const Footer = () => {
  return (
    <div className='bg-primary w-full py-4'>
      <div className="mx-auto w-[90%]">
      <div className="flex flex-col gap-4 py-4 w-full border-b">
    <img src={logo} alt="Timbucloud logo" className='w-[335px] md:w-[622px]'/>
    <p className="text-xl font-normal text-foreground md:w-[624px]">Your one-stop tech shop. The biggest personal computing retailer in West Africa</p>
    </div>
    <div className="flex flex-col md:flex-row items-start justify-between md:items-center font-normal text-sm text-foreground my-4 gap-4">
      <div className="flex gap-2 items-center text-foreground ">
        <img src={fb} alt="Facebook Icon" />
        <img src={x} alt="X Icon" />
        <img src={ig} alt="Instagram Icon" />

        
      </div>
      <div className="flex flex-col items-start md:flex-row md:items-center">
        <p className='hover:bg-foreground hover:text-background p-1'>Terms of Service</p>
                <p className='hover:bg-foreground hover:text-background p-1'>Privacy Policy</p>
                <p className='hover:bg-foreground hover:text-background p-1'>Returns & Refunds</p>

        
      </div>
    </div>

      </div>

    </div>
  )
}

export default Footer