const items = [
    {name: "Apple", price: 180},
    {name: "Mango", price: 120},
    {name: "Orange", price: 280},
    {name: "Banana", price: 80},
    {name: "Black berry", price: 90},
    {name: "Guava", price: 130}
]

// 01: filter method (filter method don't change the main Array)
// get all items of list where price is >= 120
const filteredItems = items.filter((item) => {
    return item.price >= 120
})
console.log(filteredItems)

// 02: map method
// get only names list from items
const mappedItems = items.map((item) => {
    return item.name
})
console.log(mappedItems)

// 03: find method (returns the very first items from Array)
// Get the item of Array where name is Guava
const findItemsByName = items.find((item) => {
    return item.name === "Guava"
})
console.log(findItemsByName)

// 04: forEach mathod
items.forEach((item) => {
    console.log(item.name)
})

// 05: some method (it returns boolean value based on, if any item of an Array meets the condition)
const hasAnyPriceLessThan100 = items.some((item) => {
    return item.price < 100
})
console.log(hasAnyPriceLessThan100)

// 06: every method (it returns boolean value based on, if every items of an Array meets the condition)
const isEveryItemsLessThan1000 = items.every((item) => {
    return item.price < 1000
})
console.log(isEveryItemsLessThan1000)

// 07: includes method (it returns boolean value based on, if Array contains an exact item)
const studentAges = [10, 20, 30, 40, 50]
const isContainsAge = studentAges.includes(20)
console.log(isContainsAge)