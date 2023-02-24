let arrSp1=[];
for (let i = 0; i < 2; i++) {
    arrSp1.push(prompt("first array"))
    
}
console.log(arrSp1);
let arrSp2=[]
for (let i = 0; i < 2; i++) {
    arrSp2.push(prompt("second array"))
    
}
console.log(arrSp2);
let mergeArr=[...arrSp1,...arrSp2];

console.log("merge Array",mergeArr );