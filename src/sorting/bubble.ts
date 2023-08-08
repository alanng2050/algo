// loop through the array to < array.length -1
// compare n and n+1, if n > n+1, swap them
// after the first loop, we get the largest item at the of array
// continue looping through array to < array.length - 2
// do compare as above

const bubbleSort = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
}
export default bubbleSort
