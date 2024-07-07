import React from 'react';
import { useParams } from 'react-router-dom';

import one from '../assets/products/desktop.webp'
import two from '../assets/products/desktop2.webp'
import three from '../assets/products/desktop3.webp'
import four from '../assets/products/desktop4.webp'
import five from '../assets/products/desktop5.webp'
import six from '../assets/products/desktop6.webp'
import Navbar from '@/components/Navbar';

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


const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Please select a product.</div>;
  }

  return (
    <div className="">
      <Navbar/>
      <img src={product.image1} alt={product.name} className="" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700">{product.price}</p>
      <p className="text-gray-500">{product.description}</p>

    </div>
  );
};

export default ProductDetails;
