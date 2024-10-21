import React from 'react'
import SuppliersList from './SuppliersList'
import SuppliersHeader from './SuppliersHeader'
import { suppliers } from '../data/suppliers'

function Suppliers() {



    return <>
        <SuppliersHeader lenght={suppliers.length} />
        <hr />
        <SuppliersList suppliers={suppliers} />
    </>
}

export default Suppliers