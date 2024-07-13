import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get("api/products?organization_id=d36c045231bb47b98344174449db4206&reverse_sort=false&page=1&size=10&Appid=YK1X1ZCXEX2FWDG&Apikey=79e32a1dd49c404e811a0ae6c836f1f420240712175938031711");
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
                     <h2 className='text-4xl text-left text-foreground font-bold'>{product.name}</h2>
                            {product.photos && product.photos.length > 0 && (
                         <img 
                                    src={`https://api.timbu.cloud/${product.photos[0].url}`} 
                                    alt={product.name} 
                                    onError={(e) => { e.target.onerror = null; e.target.src="" }}
                                    className='w-full h-auto object-cover'
                                />
                            )}
                            {product.photos && product.photos.length > 0 && (
                                <p className='text-sm text-gray-500'>
                                    {`https://api.timbu.cloud/${product.photos[0].url}`}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
