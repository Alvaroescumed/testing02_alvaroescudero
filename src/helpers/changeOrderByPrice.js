 const changeOrderByPrice = (products) => { // traemos products como prop
    //Should order all products by price in descending order
    const sortedProducts = [...products].sort((product1, product2) => product2.price - product1.price); //Esta es la lógica de comparación. Restar da como resultado un valor positivo si product2 es más caro que product1, un valor negativo si product1 es más caro que product2, y 0 si ambos tienen el mismo precio. Esto asegura que los productos se ordenen en orden descendente según sus precios.

    return sortedProducts;
}

export default changeOrderByPrice;