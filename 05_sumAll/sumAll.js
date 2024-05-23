const sumAll = function(int1, int2) {
let sum = 0;
let temp = 0;
if (int1 < 0 || int2 < 0) {
    return "ERROR";
} else if (typeof int1 != 'number'  || typeof int2 != 'number'){
    return "ERROR";
} else if (int1 > int2) {
    temp = int1;
    int1 = int2;
    int2 = temp;
} 

let start = int1;
let numToCount = [];
while(start != int2 + 1){
    numToCount.push(start);
    start++;
}
console.log(numToCount);
numToCount.forEach( num => {
    sum += num;
})
return sum;
}

// Do not edit below this line
module.exports = sumAll;
