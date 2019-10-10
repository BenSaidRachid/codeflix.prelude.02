module.exports = function union(...arrays) {
    let new_array = [];
      
    for (const array of arrays) {
        for (const value of array) {
            new_array.push(value);
        }
    }
    return removeDuplicate(new_array);
}

function removeDuplicate(array) {
    let new_array = array;
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] === array[j]) {
                new_array.splice(j, 1);
            }
        }
    }
    return new_array;
}