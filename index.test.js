const flatten = require('./index')

test('flatten is correct', () => {
  expect(flatten([[1,2,[3]],4]))
        .toEqual([1, 2, 3, 4])

  expect(flatten([[1,2,[3]],4, [[[[5]]]]]))
        .toEqual([1, 2, 3, 4, 5])

  expect(flatten([1, [2, [3, [4, [5, [6, [7, [8]]]]]]]]))
        .toEqual([1, 2, 3, 4, 5, 6, 7, 8])

  expect(flatten([['a'], 'b']))
        .toEqual(['a', 'b'])

  expect(flatten([[], [], [], [[1]], [2], []]))
        .toEqual([1, 2 ])

  expect(flatten([[], []]))
        .toEqual([])

  expect(flatten())
        .toEqual([])
})

