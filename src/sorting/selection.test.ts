import { selectionSort } from './selection'

test('sort correctly', () => {
  // step = 0
  // markedPos = 0 (5)
  // loop 1 => markedPos = 3 (6)
  // [6,1,4,5,2,3]
  // step = 1 (1)
  // markedPos = 1
  // loop 2 => markedPos = 2 (4) => markedPos = 3 (4 < 5)
  const arr = [5, 1, 4, 6, 2, 3]
  selectionSort(arr)
  expect(arr).toEqual([1, 2, 3, 4, 5, 6])
})

test('sort 2 items', () => {
  const arr = [5, 1]
  selectionSort(arr)
  expect(arr).toEqual([1, 5])
})

test('sort 1', () => {
  const arr = [1]
  selectionSort(arr)
  expect(arr).toEqual([1])
})
