import './ProductRow.css'

export function ProductRow({ productName, productValue }) {
    return <tr>
        <th>{productName}</th>
        <th>{productValue}</th>
    </tr>
}