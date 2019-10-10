module.exports = function difference(array, ...others) {
    let new_array = [];
    
    for (const value of array) {
        let flag = true;
        for (const iterator of others) {
            flag = isNotEqual(value, iterator);
        }
        if(flag) new_array.push(value);
    }
    return new_array;
}

function isNotEqual(value, array) {
    return !array.includes(value);
}