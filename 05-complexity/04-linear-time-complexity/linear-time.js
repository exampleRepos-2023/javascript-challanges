/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/
function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

const arr = Array.from({ length: 10000000 }, (_, index) => index + 1)
const arr2 = [1, 2, 3, 4, 5]

console.time('Access Element')
console.log(sumArray(arr2))
console.timeEnd('Access Element')

console.time('Access Element2')
console.log(sumArray(arr))
console.timeEnd('Access Element2')
