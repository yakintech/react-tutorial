import React from 'react'

function SuppliersList({ suppliers }) {
    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => {
                        return <tr>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default SuppliersList