const test = require('ava')
const index = require('index')
global.localStorage = require('./lib/localStorageMock')
const persistentArray = index([1, 2, 3])

test('', t => {
    t.deepEqual([1,2,3], persistentArray)
})