import React, { useState } from 'react'
import { suppliersData } from '../data/suppliers'

function SupplierList() {

    const [suppliers, setsuppliers] = useState(suppliersData)


    const deleteSupplier = (id) => {

        var result = window.confirm("Are u sure?")

        if (result) {
            let filteredSuppliers = suppliers.filter(item => item.id != id) // select * from Suppliers where
            setsuppliers(filteredSuppliers)
        }
    }

    return <>
        <h1>Length: {suppliers.length}</h1>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                        <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default SupplierList