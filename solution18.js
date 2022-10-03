// Solution 18

let places = ["Paris", "London", "New York", "Dubai", "Tokyo"];

console.log(places.toString())

console.log(places.slice().sort().toString())

console.log(`The original array is still ${places.toString()}`)

console.log(places.slice().sort().reverse().toString())

console.log(`The original array is still ${places.toString()}`)

places.reverse()

console.log(`The original array has changed order ${places.toString()}`)

places.reverse()

console.log(`The original array is back as it was ${places.toString()}`)

places.sort()

console.log(`The original array is now sorted ${places.toString()}`)

places.reverse()

console.log(`The original array is now sorted in reverse ${places.toString()}`)