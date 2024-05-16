const removeFromArray = function(args) {
let index = 0;
let i = 0;
let totalArgs = arguments.length;
let indexToRemove = index + 1;
    for(args[index]; args[index] < totalArgs[i]; args[index++]){
        args[0].splice(indexToRemove);
    } return(args[0]);
};

// Do not edit below this line
module.exports = removeFromArray;
