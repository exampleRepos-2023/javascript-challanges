/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function accesElement(arr, index) {
  return arr[index]
}

const arr = Array.from({ length: 1000 }, (_, index) => `Necip ${index + 1}`)
const arr2 = [1, 2, 3, 4, 5]

console.time('Access Element')
console.log(accesElement(arr2, 1))
console.timeEnd('Access Element')

console.time('Access Element2')
console.log(accesElement(arr, 1))
console.timeEnd('Access Element2')
