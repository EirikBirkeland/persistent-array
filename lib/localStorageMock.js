// a simple localStorage mock which implements value stringification (typical localStorage methods are however not implemented.)
module.exports = function () {
    const handler = {
        get(target, propKey, receiver) {
            const origMethod = target[propKey];
            return function (...args) {
                const result = origMethod.apply(this, args);
                return result
            }
        },
        set(target, propKey, value, receiver) {
            target[propKey] = value.toString()
            return true
        },
    }
    return new Proxy({}, handler)
}