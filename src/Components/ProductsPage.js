import { useState } from "react"
import changeOrderByPrice from "../helpers/changeOrderByPrice"
import getPriceColor from "../helpers/getPriceColor"


export default function ProductsPage ({items}) {

    const [products, setProducts] = useState(items);

    function handleOnChange(){
        const sortedProducts = changeOrderByPrice;

        setProducts(sortedProducts);
    }

    // Revisar ya que no funciona como deberia
    function handleSearch (e) {

        const newBusqueda = e.target.value;


        if(newBusqueda !== ''){

            const filterProducts = [...products].filter(product => product.name.toLowerCase().includes(newBusqueda.toLowerCase()));

             setProducts(filterProducts);
        } else{

            setProducts(items);
        }

        console.log(newBusqueda);
    }

    return (
        <>
        <h1>Products</h1>
        <input onChange={handleSearch} placeholder="Busca el producto deseado"></input>
        <button onClick={handleOnChange}>Change order</button>
        {products.map(product => (
            <p key={product.id} style={{color: getPriceColor(product.price)}}>
                {product.name} - {product.price}€
            </p>
        ))}
        </>
    )
}