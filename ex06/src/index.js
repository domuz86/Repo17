const array1 = [1,2,3,4,5,6,7,8,9,10]
function remoeFirstTwo(list){
    "use strict";
    //Only change code belowe this line
 let array2 = [];    
 const  [a,b, ...arr] = list; // Change this line
 array2.push(arr);        
    //Only change code belowe this line
    return array2;
}
console.log(remoeFirstTwo(array1));
module.exsports = remoeFirstTwo;