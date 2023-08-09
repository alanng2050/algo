import { insertionSort } from './insertion'

test('sort correctly', () => {
  const arr = [3, 6, 2, 4]
  insertionSort(arr)
  expect(arr).toEqual([2, 3, 4, 6])
})

test('sort correctly', () => {
  const arr = [7, 6, 2, 4]
  insertionSort(arr)
  expect(arr).toEqual([2, 4, 6, 7])
})
