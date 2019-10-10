module.exports = function flatten(array, shallow) {
    console.log(isFlattened(array))
}

function isFlattened(value) {
    let new_array = [];

    for (const array of value) {
        if (Array.isArray(array)) {
            isFlattened(array)
        } else {
            new_array.push(array);
        }
    }
    return new_array
}