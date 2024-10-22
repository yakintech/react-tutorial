import React from 'react'

function ProductsList({ products, deleteProduct,sortByUnitPrice }) {

    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{cursor:'pointer'}} onClick={sortByUnitPrice}>Unit Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                        <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>

                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default ProductsList