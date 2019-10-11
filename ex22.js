module.exports = function pluck(list, propertyName) {
    return map(list, function(item) {
        if(item[propertyName] !== undefined)
            return item[propertyName];
    })
}

function map(list, iterateCb) {
    let new_array = [];
    
    for (const key in list) {
        new_array.push(iterateCb(list[key]))
    }
    return new_array;
}