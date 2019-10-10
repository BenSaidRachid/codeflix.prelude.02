module.exports = function without(array, ...values) {
    let new_array = [];
    
    for (const value of array) {
       if(!values.includes(value)) new_array.push(value)
    }
    return new_array;
}