//Exercise
//create a new array using map that will contain all of the prices from the original without changing the original array
//Hint: remember how to access values in an object (dot)
//extra: return a string containing the name and price. example: "iphone charger sold for $10"


let amazonStore = [
    {
      name: 'iphone charger',
      price: 10,
    },
    {
      name: 'computer keyboard',
      price: 30,
    },
    {
      name: 'sony headphones',
      price: 100,
    },
    {
      name: 'toothbrush',
      price: 150
    }
] 

let result = amazonStore.map(element=>`${element.name}`)
/*let result = amazonStore.map(function(element){
  //return element.price
  //return `${element.name}`
  `${element.name}`
})*/

console.log(result)

let reduced = amazonStore.reduce((total,current)=>{
  return (total + current.price)
  //amazonStore.length
},0)

console.log(reduced/amazonStore.length)

console.log("h"*"h")

let filtered = amazonStore.filter(element=>element.price<50)
console.log(filtered)
{const x = 1}
const x = 3