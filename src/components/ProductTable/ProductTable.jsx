import { ProductCategoryRow } from '../ProductCategoryRow/ProductCategoryRow'
import { ProductRow } from '../ProductRow/ProductRow'
import './ProductTable.css'

export function ProductTable({ products }) {

    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        const style = product.stocked ? undefined : { color: 'red' }
        rows.push(<ProductRow key={product.name} productName={product.name} productValue={product.price} style={style}/>)
    })

    return <table>
        <thead>
            <tr>
                <th scope='col'>Nom</th>
                <th scope='col'>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}