const repeatString = function(str, num) {
    var str1 = str;
    if(num == 0){
        return('');
    } else if(num < 0){
        return "ERROR";
    } else {
    for(let n = 1; n < num; n++) {
        str1 = str.concat(str1);
    }}
    return (str1);
};

// Do not edit below this line
module.exports = repeatString;
