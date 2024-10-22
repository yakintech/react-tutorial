import React, { useState } from 'react'
import ProductsHeader from './ProductsHeader'
import ProductsList from './ProductsList'
import { productsData } from '../../data/products'

function ProductsMain() {

    const [products, setproducts] = useState(productsData)
    const [isSortedByUnitPrice, setisSortedByUnitPrice] = useState(false)
    

    const deleteProduct = (id) => {

        let filteredProducts = products.filter(q => q.id != id)
        setproducts(filteredProducts)

    }

    const sortByUnitPrice = () => {
            
            let sortedProducts = [...products]
    
            if (!isSortedByUnitPrice) {
                sortedProducts.sort((a, b) => a.unitPrice - b.unitPrice)
            } else {
                sortedProducts.sort((a, b) => b.unitPrice - a.unitPrice)
            }
    
            setproducts(sortedProducts)
            setisSortedByUnitPrice(!isSortedByUnitPrice)

    }

    const empty = () => {
        setproducts([])
    }

    const refresh = () => {
        setproducts(productsData)
    }

    const search = (word) => {
        let filteredProducts = productsData.filter(q => q.name.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
        setproducts(filteredProducts)
    }

    return <>
        <ProductsHeader search={search} length={products.length} empty={empty} refresh={refresh} />
        <ProductsList products={products} deleteProduct={deleteProduct} sortByUnitPrice={sortByUnitPrice} />
    </>
}

export default ProductsMain