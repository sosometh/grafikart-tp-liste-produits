import { useCallback, useState } from 'react'
import './SearchBar.css'

export function SearchBar({ changeOpt, opt }) {

    // gestion du check des stocks
    const [checkOnStock, setCheckOnStock] = useState(false)
    const toggleCheckStock = () => {
        setCheckOnStock(!checkOnStock)
        changeOpt({
            ...opt,
            stockChecked: !checkOnStock
        })
    }

    // gestion de la recherche par nom
    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
        changeOpt(({
            ...opt,
            search: e.target.value
        }))
    }

    return <div className='product-table'>
        <input type="text" placeholder='Search...' name='searchName' value={search} onChange={handleSearch} />
        <br />
        {search}
        <label htmlFor="checkStock">
            <input type="checkbox" name='checkStock' checked={checkOnStock} onChange={toggleCheckStock} />
            Only show products in stock
        </label>
    </div>
}