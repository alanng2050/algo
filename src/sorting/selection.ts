export const selectionSort = (arr: number[]) => {
  // the idea of selection sort is: pick the largest/smallest item to the ahead position in the array
  // continue pick the second/third/... largest/smallest to the ahead second/third position in the array
  // assume the first item is largest, step=0, largestPos=step
  // iterate through the array, start with n=step
  //  => if item at arr[step] < arr[n]
  //  => mark down largestPos = n
  //  => swap position n and step
  // increase step +1, and do it again
  // if step < arr.length - 2, stop

  if (arr.length === 0) return arr

  let markedPos = 0

  for (let step = 0; step < arr.length - 1; step++) {
    markedPos = step
    for (let n = step + 1; n < arr.length; n++) {
      if (arr[markedPos] > arr[n]) {
        markedPos = n
      }
    }

    const tmp = arr[step]
    arr[step] = arr[markedPos]
    arr[markedPos] = tmp
  }
}
