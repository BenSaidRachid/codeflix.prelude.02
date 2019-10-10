module.exports = function intersecion(...arrays) {
    let new_array = [];
    for (let j = 0; j < arrays[0].length; j++) {
        let count = 1;
        for(let i = 1; i < arrays.length; i++) {
            if(isEqual(arrays[0][j], arrays[i])) count++;
        }
        console.log(count)
        if(count === arrays.length) new_array.push(arrays[0][j])
    }
    return new_array;
}

function isEqual(value, array) {
    for (const iterator of array) {
        if(value === iterator) return true;
    }
    return false;
}