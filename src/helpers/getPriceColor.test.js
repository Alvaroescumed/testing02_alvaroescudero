import getPriceColor from "./getPriceColor";

const mockProducts = [
    {
        id: 2,
        name: 'Chorizo a la sidra',
        price: 15,
    },
    {
        id: 1,
        name: 'Chachopo',
        price: 30,
    },
    {
        id: 3,
        name: 'Navajas',
        price: 25,
    },

 ]

describe("getPriceColor", () => {
    it("should return red if price > 25", () => {
        const color = getPriceColor(mockProducts[1].price);

        expect(color).toBe("red");
    })
    it ("should return orange if price > 15 and price <= 25", () =>{
        const color  = getPriceColor(mockProducts[2].price);

        expect(color).toBe("orange");
    })
    it("should return green if it's any other case", () => {
        const color = getPriceColor(mockProducts[0].price);

        expect(color).toBe("green");
    })
})