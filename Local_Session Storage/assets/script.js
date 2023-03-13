localStorage.setItem("num",20);
let arrNumbers=[1,2,3,4,5]
localStorage.setItem("arr",JSON.stringify(arrNumbers));
console.log(JSON.parse(localStorage.getItem("arr")));
let obj={name:"lolo",surname:"ipsooo",age:27}
sessionStorage.setItem("obj",JSON.stringify(obj))
console.log(JSON.parse(sessionStorage.getItem("obj")));
