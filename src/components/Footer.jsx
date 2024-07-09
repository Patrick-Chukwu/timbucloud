import React from 'react'
import logo from '/logo.svg'
import fb from '../assets/fb.svg'
import x from '../assets/x.svg'
import ig from '../assets/ig.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-primary w-full py-4'>
      <div className="mx-auto w-[95%]">
      <div className="flex flex-col gap-4 py-6 w-full border-b">
        <Link to="/">    <img src={logo} alt="Timbucloud logo" className='w-[328.28px] h-7 md:w-[328.85px]'/>
        </Link>
    <p className="text-xl font-normal text-foreground w-[335px] md:w-[624px] lg:w-full max-w-[98%] ">Your one-stop tech shop. The biggest personal computing retailer in West Africa</p>
    </div>
    <div className="flex flex-col md:flex-row items-start justify-between md:items-center font-normal text-sm text-foreground mb-4 mt-12 gap-4">
      <div className="flex gap-4 items-center text-foreground ">
        <img src={fb} alt="Facebook Icon" />
        <img src={x} alt="X Icon" />
        <img src={ig} alt="Instagram Icon" />

        
      </div>
      <div className="text-[16px] flex flex-col items-start md:flex-row md:items-center">
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