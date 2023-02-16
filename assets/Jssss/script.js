let arr=[];
for (let i = 0; i<4 ;i++) {  
    arr.push(Number(parseInt(prompt("-enter--number------3---%-"))))
}
let sum=0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%3==0) {
       sum+=arr[i]
    } 
}
console.log(sum);

