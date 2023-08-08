import bubbleSort from './bubble'

test('sort correctly', () => {
  const arr = [5, 1, 4, 6, 2, 3]
  bubbleSort(arr)
  expect(arr).toEqual([1, 2, 3, 4, 5, 6])
})

test('sort correctly with negative and postive numbers', () => {
  const arr = [-1, -4, -2, -4, 43, 6, 2]
  bubbleSort(arr)
  expect(arr).toEqual([-4, -4, -2, -1, 2, 6, 43])
})

test('Array has 1 item', () => {
  const arr = [-1]
  bubbleSort(arr)
  expect(arr).toEqual([-1])
})

test('Array has 2 items', () => {
  const arr = [1, -1]
  bubbleSort(arr)
  expect(arr).toEqual([-1, 1])
})
