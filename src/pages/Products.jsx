import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("api/products?organization_id=d36c045231bb47b98344174449db4206&reverse_sort=false&page=1&size=10&Appid=YK1X1ZCXEX2FWDG&Apikey=79e32a1dd49c404e811a0ae6c836f1f420240712175938031711");
            console.log(response.data.items)
            setProducts(response.data.items);

        } catch (error) {
            console.error("Error fetching data", error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div className='mt-24'>

        <h2>Fetched responses</h2>
        <div className="flex gap-2">
            {products.map(product => (
                <div key={product.unique_id} className="flex flex-col gap-4">
                    <h2>{product.name}</h2>
                    {product.photos.length > 0 && (
                        <img src={`https://api.timbu.cloud/${product.photos[0].url}`} alt={product.name} 
                        onError={(e) => { e.target.onerror = null; e.target.src="" }}
                        />
                    )}
                <p>     {`https://api.timbu.cloud/${product.photos[0].url}`}</p>
                </div>
            ))}
        </div>
    {/* {items ? <pre>Loaded</pre> : <p>Loading</p>} */}

    </div>
  )
}

export default Products