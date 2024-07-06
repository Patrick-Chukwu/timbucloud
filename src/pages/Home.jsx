import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import one from '../assets/products/desktop.webp'
import two from '../assets/products/desktop2.webp'
import three from '../assets/products/desktop3.webp'
import four from '../assets/products/desktop4.webp'
import five from '../assets/products/desktop5.webp'
import six from '../assets/products/desktop6.webp'
import product from '../assets/products/desktop8.webp'

import { Button } from '@/components/ui/button'


const products = [
  {
    id: 1,
    image1: one,
    image2: '/src/assests/products/desktop.webp',

    name: 'Dell UltraSharp 39.7" 2160p HDR 120 Hz Curved Thunderbolt Hub Monitor',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$1,829.99'
  },
  {
    id: 2,
    image1: two,
    image2: '/src/assests/products/desktop.webp',

    name: 'Dell UltraSharp 38" 1600p Curved Monitor',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$1041.73'
  },
  {
    id: 3,
    image1: three,
    image2: '/src/assests/products/desktop.webp',

    name: 'Apple 24" iMac with M3 Chip (Silver)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$2,299.00'
  },
  {
    id: 4,
    image1: four,
    image2: '/src/assests/products/desktop.webp',

    name: 'Apple Mac mini (M2 Pro)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$1,499.00'
  },
  {
    id: 5,
    image1: five,
    image2: '/src/assests/products/desktop.webp',

    name: 'SanDisk 4TB Extreme Portable SSD V2 (Black)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$299.99'
  },
  {
    id: 6,
    image1: six,
    image2: '/src/assests/products/desktop.webp',

    name: 'Apple 16" MacBook Pro (M3 Pro, Space Black)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$2,499.00'
  }
]

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <Navbar/>
      <header className="w-[95%] max-w-[1280px] mx-auto   bg-cover bg-center rounded-3xl " style={{backgroundImage: "url('/hero.webp')"}}>
      <div className="p-8 h-[321px] md:h-[396px] lg:h-[400px] gradient w-full rounded-3xl  my-4  flex flex-col items-start justify-end gap-2 ">
      <motion.h1 whileInView={{scale:1}} initial={{scale:.8}} className='pt-16 text-4xl md:text-5xl font-black text-background opacity-90'>Autumn Collection</motion.h1>
      <div className="flex flex-col gap-2 justify-start items-start md:flex-row md:justify-between md:items-center md:w-[95%]">
        <p className="text-[16px] md:text-xl font-normal text-background">Get the latest tech products at CRAZY discount prices.</p>
        <Button className="text-xl font-bold">Buy Now</Button>
      </div>

      </div>
      </header>
    
      <main>
      <section className='sectionflex flex-col items-center justify-start gap-2 py-2 px-3 md:px-6 mx-auto md:w-[95%]'>
       <div className="flex flex-col gap-2 self-start items-start justify-center">
       <h2 className="text-foreground font-bold text-2xl">Editor’s Pick</h2>
       <p className='text-border text-sm font-normal'>Get the latest tech products at CRAZY discount prices.</p>
       </div>
      <div className="">
      <div className=" my-8 flex flex-col items-center justify-center gap-8 md:gap-4 md:flex-row md:justify-between md:items-center flex-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} onClick={handleProductClick} />
        ))}
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
      </section>
      <section className="w-[95%] max-w-[1280px] mx-auto   bg-cover bg-center rounded-3xl " style={{backgroundImage: "url('/desktop7.webp')"}}>
      <div className="p-8 h-[321px] md:h-[396px] lg:h-[400px] gradient2 w-full rounded-3xl  my-4  flex flex-col items-start justify-end gap-2 ">
      <motion.h1 whileInView={{scale:1}} initial={{scale:.8}} className='pt-16 text-4xl md:text-5xl font-black text-background opacity-90'>Get Custom setup</motion.h1>
      <div className="flex flex-col gap-2 justify-start items-start md:flex-row md:justify-between md:items-center md:w-[95%]">
        <p className="text-[16px] md:text-xl font-normal text-background">Get the latest tech products at CRAZY discount prices.</p>
        <Button className="text-xl font-bold">Buy Now</Button>
      </div>

      </div>
      </section>
      <section className="flex justify-center flex-col lg:flex-row items-start lg:items-start w-[95%] mx-auto my-8 gap-4">
        <div className="flex flex-col items-start justify-start gap-2 lg:w-[48%] border">
          <h3 className='text-4xl font-bold text-foreground mb-2'>Top Categories</h3>
          <p className="text-border font-normal text-3xl border-b border-grey hover:text-background">Mac</p>
          
        </div>
        <div className='lg:w-1/2 border'> 
        <img src={product} alt="product image" className='w-[350px] h-[500px] rounded-[40px] object-cover'/>
        </div>
       
      </section>
      </main>
    </div>
  )
}

export default Home