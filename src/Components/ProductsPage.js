import { useEffect, useState } from "react"
import changeOrderByPrice from "../helpers/changeOrderByPrice"
import getPriceColor from "../helpers/getPriceColor"


export default function ProductsPage ({items}) {

    const [products, setProducts] = useState(items);
    const [search, setSearch] = useState('');


    function handleOnChange(){
        const sortedProducts = changeOrderByPrice;

        setProducts(sortedProducts);
    }

    // Revisar ya que no funciona como deberia
    const handleInputSearch = (e) => {

        const newSearch = e.target.value;
        setSearch(newSearch);
    }

    return (
        <>
        <h1>Products</h1>
        <input onChange={handleInputSearch} value={search} placeholder="Busca el producto deseado"></input>
        <button onClick={handleOnChange}>Change order</button>
        {products
            .filter(product => product.name.toLowerCase().includes(search.toLowerCase())) // de esta forma conseguimos que realizando el filtrado en el renderizado la busqueda no borre el restro de parametros de productsm como pasaba haciendo el filtro en la funcion de busqueda
            .map(product => (
                <p key={product.id} style={{color: getPriceColor(product.price)}}>
                    {product.name} - {product.price}€
                </p>
        ))}
        </>
    )
}