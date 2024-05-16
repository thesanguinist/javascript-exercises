const reverseString = function(str) {
let str1 = str;
let str2 = "";
i = str.length -1;
while(i >= 0){
    str2 += str1[i];
    i-- ;
    }
return (str2)
};


// Do not edit below this line
module.exports = reverseString;
