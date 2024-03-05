import { ProductRow } from '../ProductRow/ProductRow'
import './ProductTable.css'

export function ProductTable({ products }) {

    const productsElements = products.map(product => <ProductRow key={product.name} productName={product.name} productValue={product.price} />)

    return <table>
        <tbody>
            {productsElements}
        </tbody>
    </table>
}