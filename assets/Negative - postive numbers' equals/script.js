let num=Number(parseInt(prompt("enter numbers(postive=>equals or negative=>factorial)")))
let equal=1;
let factorial=1;
function EqualFactorial(num) {
   
    if (num%2==0) {
        for (let i = 0; i <=num; i++) {
        equal=num*num
        }
        
        console.log(equal);
    }
    else{
        for (let i = 1; i <=num; i++) {
              factorial*=i;   
            }
      console.log(factorial);
    }
    
}
EqualFactorial(num);