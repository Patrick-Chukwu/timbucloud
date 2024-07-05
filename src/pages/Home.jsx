import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <header className="w-[95%] max-w-[1280px] mx-auto   bg-cover bg-center rounded-3xl " style={{backgroundImage: "url('/hero.png')"}}>
      <div className="p-8 h-[400px] gradient w-full rounded-3xl  my-4  flex flex-col items-start justify-end gap-2 ">
      <motion.h1 whileInView={{scale:1}} initial={{scale:.8}} className='pt-24 text-4xl md:text-5xl font-black text-background opacity-90'>Autumn Collection</motion.h1>
      <div className="flex flex-col gap-2 justify-start items-start md:flex-row md:justify-between md:items-center md:w-[95%]">
        <p className="text-[16px] md:text-xl font-normal text-background">Get the latest tech products at CRAZY discount prices.</p>
        <Button className="text-xl font-bold">Buy Now</Button>
      </div>

      </div>
      </header>
    </div>
  )
}

export default Home