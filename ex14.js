module.exports = function values(object) {
    let new_array = [];

    for (const [key, value] of Object.entries(object)) {
        let tmp_array = [];
        tmp_array.push(key);
        tmp_array.push(value);
        new_array.push(tmp_array)
    }
    return new_array;
}