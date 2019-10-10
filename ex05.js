module.exports = function flatten(array, shallow) {
    return (!shallow) ? isFlatten(array, [], true) : flattenOnce(array, [], true);
}

function isFlatten(array, new_array) {
    for (const value of array) {
        if(Array.isArray(value)) {
            isFlatten(value, new_array);
        } else {
            new_array.push(value);
        }
    }
    return new_array;
}

function flattenOnce(array, new_array, flag) {
    for (const value of array) {
        if(Array.isArray(value) && flag) {
            flattenOnce(value, new_array, false);
        } else {
            flag = true;
            new_array.push(value);
        }
    }
    return new_array;
}

// console.log(func([1, [2], [3, [[[4]], 5]]], true))