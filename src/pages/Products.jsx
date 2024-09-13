import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const orgId = import.meta.env.VITE_ORG_ID;
const appId = import.meta.env.VITE_APP_ID;

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(`api/products?organization_id=${orgId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}`);
            console.log(response.data.items);
            setProducts(response.data.items);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='mt-24'>
            <h2 className='text-primary text-3xl font-bold w-full px-8 textce'>Fetched responses</h2>
            {loading ? (
                <p className='text-center'> Loading...</p>
            ) : (
                <div className="flex flex-wrap gap-4 max-w-[98%] mx-auto px-4">
                    {products.map(product => (
                        <div key={product.unique_id} className="flex flex-col gap-4 border p-4 w-[300px] mx-auto">
                     <h2 className='text-xl font-bold text-foreground w-full text-left'>{product.name}</h2>
                     <p className="text-sm font-extrabold text-destructive">{product.description}</p>
                            {product.photos && product.photos.length > 0 && (
                         <img 
                                    src={`https://api.timbu.cloud/${product.photos[0].url}`} 
                                    alt={product.name} 
                                    onError={(e) => { e.target.onerror = null; e.target.src="" }}
                                    className='w-full h-auto object-cover'
                                />
                            )}
                            {/* {product.photos && product.photos.length > 0 && (
                                <p className='text-sm text-gray-500'>
                                    {`${product.photos[0].url}`}
                                </p>
                            )} */}
                              <p className="text-foreground text-2xl font-bold">{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
