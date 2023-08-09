export const insertionSort = (arr: number[]) => {
  // the idea is to move each item to correct position
  // assume the first item is sorted already
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        arr[j + 1] = arr[j]
        if (j === 0) {
          arr[j] = current
        }
      } else {
        arr[j + 1] = current
        break
      }
    }
  }
}
