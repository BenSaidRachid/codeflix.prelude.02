module.exports = function size(list) {
    let i = 0;

    for (const iterator in list) {
        i++;
    }

    return i;
}