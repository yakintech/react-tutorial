import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../data/products'

function ProductDetail() {

    const { id } = useParams()

    let detail = productsData.find(q => q.id == id) // select top 1 from products where Id == id

    return <>
        <h1>Id: {id}</h1>
        <h1>Name: {detail?.name}</h1>
        <h1>Unit Price: {detail?.unitPrice}</h1>
        <h1>Stock: {detail?.unitsInStock}</h1>
    </>
}

export default ProductDetail