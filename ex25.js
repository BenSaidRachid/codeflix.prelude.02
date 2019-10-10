module.exports = function isMatch(object, properties) {
    let flag = true;
    for (const [key] of Object.entries(properties)) {
        if(object.hasOwnProperty(key)) {
           if(object[key] !== properties[key]) {
               flag = false;
           }
        } 
    }
    return flag;
}