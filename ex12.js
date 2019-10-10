module.exports = function keys(object) {
    let new_array = [];

    for (const [key] of Object.entries(object)) {
        new_array.push(key);
    }
    return new_array;
}