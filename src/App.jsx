import { useState } from "react"
import { ProductTable } from "./components/ProductTable/ProductTable"
import { SearchBar } from "./components/SearchBar/SearchBar"

function App() {

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  const [dataSearch, setDataSearch] = useState({
    search: '',
    stockChecked: false
  })

  let filteredProducts = []
  
  if (dataSearch.search != '') {
    filteredProducts = PRODUCTS.filter(product => product.name.toLowerCase().includes(dataSearch.search.toLowerCase() ))
    console.log(filteredProducts)
  } else {
    filteredProducts = PRODUCTS
  }

  if (dataSearch.stockChecked == true) {
    filteredProducts = filteredProducts.filter(product => product.stocked == true)
  }

  return <>
    <SearchBar changeOpt={setDataSearch} opt={dataSearch} />
    <ProductTable products={filteredProducts} />
    {dataSearch.search}
  </>

}

export default App
