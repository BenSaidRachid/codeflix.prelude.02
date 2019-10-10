module.exports = function omit(obj, ...options) {
    const [firstOpts] = options
    const newObj = {}

    if (typeof firstOpts === 'function') {
        const callback = firstOpts
  
        for (const item of Object.entries(obj)) {
            const [key, value] = item
            if (!callback(value, key)) {
                newObj[key] = obj[key]
            }
        }
    } else {
        for (const [item] of Object.entries(obj)) {
            for (const key of options) {
                if (item !== key) {
                    newObj[item] = obj[item]
                }
            }
        }
    }
    return newObj
}