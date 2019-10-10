module.exports = function without(array, ...values) {
    let new_array = [];
    
    for (const value of array) {
        let flag = true;
        for (const to_delete of values) {
            if(value === to_delete) flag = false;
        }
        if(flag) new_array.push(value)
    }

    return new_array;
}