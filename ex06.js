module.exports = function without(array, ...values) {
    let new_array = [];
    
    for (const value of array) {
        let flag = true;
        for (const to_delete of values) {
            if(value === to_delete) flag = false;
        }
        if(flag) new_array.push(value)
    }

    console.log(new_array)
}

function isFlattened(value) {
    let new_array = [];
    if(typeof(value) === undefined) return;
    
    for (const array of value) {
        console.log(array)
        if (Array.isArray(array)) {
            isFlattened(array)
        } else {
            new_array.push(array);
        }
    }
    console.log(new_array)
}