let firstArray = [1,2,3];
let lastArray = [4,5,6];

let joinedArray = [...firstArray,...lastArray];//concat
console.log(joinedArray);

console.log(JSON.stringify(joinedArray));

let concatArray = firstArray.concat(lastArray);
console.log(concatArray);

console.log(JSON.stringify(concatArray));
function add(...nums){
    let add=0;
    for(let num of nums){
        add+=num;
        
    }
    return add;
}


console.log(add(1,2,3));
console.log(add(1,2,3,8,10,12));
console.log(add(1,2,3,8,10,12,1,2,3,8,10,12));



