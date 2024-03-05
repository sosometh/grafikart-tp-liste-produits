import './ProductRow.css'

export function ProductRow({ productName, productValue, style }) {
    return <tr>
        <td style={style}>{productName}</td>
        <td>{productValue}</td>
    </tr>
}