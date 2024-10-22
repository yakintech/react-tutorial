import React, { useState } from 'react'
import { suppliersData } from '../data/suppliers'

function SuppliersPage() {

    const [suppliers, setsuppliers] = useState(suppliersData)

    return <>
        <table>
            <thead>
                <tr>
                    <th>Supplier ID</th>
                    <th>Supplier Name</th>
                    <th>Contact Name</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map(supplier => (
                    <tr key={supplier.id}>
                        <td>{supplier.id}</td>
                        <td>{supplier.companyName}</td>
                        <td>{supplier.contactName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default SuppliersPage