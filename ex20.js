module.exports = function sample(list, n = 1) {
    let new_array = [];
    if(n === 1) return list[getRandomInt(list.length)];
    for (let i = n; i > 0; i--) {
        if(list.length == 0) return new_array;
        let rand = getRandomInt(list.length);
        new_array.push(list[rand]);
        list.splice(rand, 1);
    }
    return new_array;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}