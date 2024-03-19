
const  getPriceColor = price => {
        // price > 25 should return red
        // price > 15 and price <= 25 should return orange
        // In any other case return green

        const newPrice = price;

        if(newPrice > 25){
            return "red";
        } else if (newPrice > 15 && newPrice <= 25){
            return "orange";
        } else{
            return "green";
        }
}

export default getPriceColor;