const items = [
    {name: "Apple", price: 180},
    {name: "Mango", price: 120},
    {name: "Orange", price: 280},
    {name: "Banana", price: 80},
    {name: "Black berry", price: 90},
    {name: "Guava", price: 130}
]

const data = items.filter(item => item.price < 130)
console.log(data)