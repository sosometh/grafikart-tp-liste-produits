import './ProductCategoryRow.css'

export function ProductCategoryRow({name}) {
    return <tr>
        <th colSpan={2}>
            {name}
        </th>
    </tr>
}