const removeFromArray = function(Array, ...otherArgs) {
    var Args =[...otherArgs]; //working
    var newArray =Array.filter(checkRemoval);
    
    function checkRemoval(item){
        if (!Args.includes(item)){
            return item;
        };
    
    };
    return newArray
};
//found the following from a stackoverflow post
// const removeFromArray = function(array, ...args) {
//     return array.filter(x => !args.includes(x));
// };


// Do not edit below this line
module.exports = removeFromArray;
