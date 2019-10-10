module.exports = function lastIndexOf(array, value) {
    let lastIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value) lastIndex = i;
    }
    return lastIndex;
}