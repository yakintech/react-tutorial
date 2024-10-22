import React, { useEffect, useState } from 'react'
import { categoriesData } from '../data/categories'
import { productsData } from '../data/products'

function EffectDependency() {

    const [categories, setcategories] = useState(categoriesData)
    const [products, setproducts] = useState(productsData)
    const [selectedCategoryId, setselectedCategoryId] = useState(1)
    const [stockStatus, setstockStatus] = useState(false)

    useEffect(() => {

        let filteredProducts = productsData.filter(q => q.categoryId == selectedCategoryId)
        setproducts(filteredProducts)
    }, [selectedCategoryId])

    useEffect(() => {
      
        if(!stockStatus){
            let stockFilteredProducts = productsData.filter(q => q.unitsInStock > 5)
            setproducts(stockFilteredProducts)
        }
        else{
            setproducts(productsData)
        }

    }, [stockStatus])
    


    return <>
        <h1>Length: {products.length}</h1>
        <hr />
        <div>
            <label htmlFor="">Stock:</label>
            <input type="checkbox" onChange={(e) => setstockStatus(e.target.checked)} />

        </div>
        <select onChange={(e) => setselectedCategoryId(e.target.value)}>
            {
                categories.map(item => <option key={item.id} value={item.id}> {item.name}</option>)
            }
        </select>
        <hr />
        <ul>
            {
                products.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>
}

export default EffectDependency