import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import one from '../assets/products/desktop.webp';
import two from '../assets/products/desktop2.webp';
import three from '../assets/products/desktop3.webp';
import four from '../assets/products/desktop4.webp';
import five from '../assets/products/desktop5.webp';
import six from '../assets/products/desktop6.webp';
import one1 from '../assets/products/desktop10.webp';
import one2 from '../assets/products/desktop9.webp';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    image1: one,
    image2: one1,
    image3: one2,
    name: 'Dell UltraSharp 39.7" 2160p HDR 120 Hz Curved Thunderbolt Hub Monitor',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology...',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$1,829.99'
  },
  {
    id: 2,
    image1: two,
    image2: one1,
    image3: one2,
    name: 'Dell UltraSharp 38" 1600p Curved Monitor',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$1041.73'
  },
  {
    id: 3,
    image1: three,
    image2: one1,
    image3: one2,
    name: 'Apple 24" iMac with M3 Chip (Silver)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$2,299.00'
  },
  {
    id: 4,
    image1: four,
    image2: one1,
    image3: one2,
    name: 'Apple Mac mini (M2 Pro)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$1,499.00'
  },
  {
    id: 5,
    image1: five,
    image2: one1,
    image3: one2,
    name: 'SanDisk 4TB Extreme Portable SSD V2 (Black)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$299.99'
  },
  {
    id: 6,
    image1: six,
    image2: one1,
    image3: one2,
    name: 'Apple 16" MacBook Pro (M3 Pro, Space Black)',
    description: 'The Midnight Apple 13" MacBook Air now features the Apple M3 chip, which has many improvements over its predecessor, the M2. Now built on 3nm process technology, the M3 8-Core Chip is combined with a 10-Core GPU. The next-gen GPU features Dynamic Caching, hardware-accelerated ray tracing, and mesh shading, all of which significantly increase performance for the most demanding creative apps and games. The M3 Chip also has a 16-Core Neural Engine that can leverage the power of AI for both macOS and a growing number of supported apps. It also has 16GB of unified RAM and a 512GB SSD. Add Wi-Fi 6E (802.11ax) and support for two external displays, and this MacBook Air delivers performance, power efficiency, and portability',
    tag: '#DEU3824DW • MFR #U3824DW',
    price: '$2,499.00'
  }
];

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(productId));

  const [selectedImage, setSelectedImage] = useState(product.image1);

  if (!product) {
    return <div>Please select a product.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    const buttonContent = document.getElementById("addToCart");
    buttonContent.textContent = "Added to cart";
    console.log(product.price)
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

 



  if (!product) {
    return <div>Please select a product.</div>;
  }



  return (
    <div className='mt-28 mb-20'>
      <div className="w-[95%] mx-auto md:px-4">
        <div className="flex gap-8 items-center justify-between my-8 flex-col lg:flex-row">
          <div className="flex flex-col gap-4 items-center justify-center h-[516px] w-[522px] max-w-[95%] shrink">
            <img src={selectedImage} alt={product.name} className="h-[340px] w-[522px] object-contain" />
            <div className="flex justify-center items-center w-[95%] md:w-1/2 gap-4">
              <img
                src={product.image1}
                alt={product.name}
                className={`size-[100px] md:size-40 border p-2 rounded-xl ${selectedImage === product.image1 ? 'border-primary' : ''}`}
                onClick={() => handleImageClick(product.image1)}
              />
              <img
                src={product.image2}
                alt={product.name}
                className={`size-[100px] md:size-40 border p-2 rounded-xl ${selectedImage === product.image2 ? 'border-primary' : ''}`}
                onClick={() => handleImageClick(product.image2)}
              />
              <img
                src={product.image3}
                alt={product.name}
                className={`size-[100px] md:size-40 border p-2 rounded-xl ${selectedImage === product.image3 ? 'border-primary' : ''}`}
                onClick={() => handleImageClick(product.image3)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start items-col w-[95%] mx-auto lg:w-1/2">
            <h1 className="text-4xl text-left text-foreground font-bold">{product.name}</h1>
            <p className="text-destructive text-sm font-normal">{product.description}</p>
            <p className="font-bold text-sm underline">Read More</p>
            <div className="flex justify-start items-start md:items-center gap-6 text-xl text-foreground font-bold w-full flex-col md:flex-row">
              <div className="flex justify-center items-center gap-2">
                <>
                  <Star className='text-primary fill-primary' />
                  <Star className='text-primary fill-primary' />
                  <Star className='text-primary fill-primary' />
                  <Star className='text-primary fill-primary' />
                  <Star className='text-primary' />
                </>
                <p>4.0</p>
              </div>
              <p>12k reviews</p>
            </div>
            <p className="text-[28px] text-foreground font-bold">{product.price}</p>
            <div className="flex justify-between gap-4 w-full">
              <Button id="addToCart" className="bg-primary rounded-3xl w-[335px] text-center py-6 text-xl font-bold hover:bg-destructive hover:text-background" onClick={handleAddToCart}>Add To Cart</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center my-4 px-6">
          <h3 className="font-bold text-3xl">Key Features</h3>
          <li>Apple M3 8-Core Chip</li>
          <li>16GB Unified RAM | 512GB SSD</li>
          <li>13.6" 2560 x 1664 Liquid Retina Display</li>
          <li>10-Core GPU | 16-Core Neural Engine</li>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
