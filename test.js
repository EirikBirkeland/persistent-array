const test = require('ava')
const index = require('./index')
global.localStorage = require('./lib/localStorageMock')
const persistentArray = index('myUniqueStore')

test('', t => {
    persistentArray['key'] = 'value'
    t.deepEqual({key:"value"}, persistentArray)
})