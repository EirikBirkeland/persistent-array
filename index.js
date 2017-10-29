/**
 * @param {string} storeName
 * @returns {Proxy}
 */
module.exports = function getPersistentArrayObject(storeName) {
    const handler = {
        get(target, propKey, receiver) {
            return target[propKey]
        },
        set(target, propKey, value, receiver) {
            target[propKey] = value
            localStorage[storeName] = JSON.stringify(target)
            return true
        },
        deleteProperty(target, propKey) {
            delete target[propKey]
            localStorage[storeName] = JSON.stringify(target)
            return true
        }
    }

    const storedArr = !!localStorage[storeName] ? JSON.parse(localStorage[storeName]) : {}

    return new Proxy(storedArr, handler)
}