import React, { useState } from 'react'
import { productsData } from '../data/products'

function ProductsPage() {

    const [products, setproducts] = useState(productsData)

    return <>
        <ul>
            {
                products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>
}

export default ProductsPage