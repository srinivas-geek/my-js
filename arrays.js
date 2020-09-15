
/*
1. filter array method
2. map array method
3. find array method
4. array method
5. array method
6. array method
*/

const arrayItems = [
  {name: 'a', price: 100},
  {name: 'b', price: 200},
  {name: 'c', price: 50},
  {name: 'f', price:230},
  {name: 'sd', price: 130},
  {name: 'd', price: 340},
  {name: 'y', price: 450},
  {name: 'u', price: 320},
  {name: 'ae', price: 20},
  {name: 'at', price: 10},
  {name: 'au', price: 180},
  {name: 'awe', price: 140},
]

/*
//====> filter array method
const filteredItems = arrayItems.filter((item) => {
  return item.price <= 50
})
console.log(filteredItems);
------output------
Array(3)
0: {name: "c", price: 50}
1: {name: "ae", price: 20}
2: {name: "at", price: 10} 
*/

/*
//====> map array method
const itemNames = arrayItems.map((item) => {
  return item.name
})
console.log(itemNames);
-----------output----------
["a", "b", "c", "f", "sd", "d", "y", "u", "ae", "at", "au", "awe"]
*/

/*
//==> find method
const foundItem = arrayItems.find((item) => {
  return item.name == 'awe'
})
console.log(foundItem);
--------output----------
{name: "awe", price: 140}

*/

/*
forEach method
arrayItems.forEach(item => {
  console.log(item.name);
});
*/

/*
some method
const hasInexpensiveItems = arrayItems.some((item) => {
  return item.price <= 100
})
---------------output-------
true or false
*/

/*
some method
const hasInexpensiveItems = arrayItems.every((item) => {
  return item.price <= 100
})
---------------output-------
true or false
*/

/*
//====> reduce array method
const total = arrayItems.reduce((currentTotal, items) => {
  return items.price + currentTotal
}, 0)
console.log(total);
-------- output---------
2170
*/

/*
const items = [1, 2, 4, 6, 7, 3]
const includesItem = items.includes(4)
console.log(includesItem);
//output ==>  true or false
*/
