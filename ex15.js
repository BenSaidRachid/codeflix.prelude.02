module.exports = function invert(object) {
    let new_object = {};

    for (const [key, value] of Object.entries(object)) {
        new_object[value] = key; 
    }
    return new_object;
}