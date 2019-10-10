module.exports = function values(object) {
    let new_array = [];

    for (const [key, value] of Object.entries(object)) {
        new_array.push(value);
    }
    return new_array;
}