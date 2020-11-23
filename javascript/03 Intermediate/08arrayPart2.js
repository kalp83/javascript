 var iseven = (element) => {
//     if(element % 2 ===0){
//         return true;
//  }
//  return false;
return element % 2===0;
}



//console.log(iseven(3));

// var result = [2,4,3,8].every(iseven);
// console.log(result);

var result = [2,4,4,8].every((e) => (e % 2 ===0));

console.log(result);
