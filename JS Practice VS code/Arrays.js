//Arrays are variables which holds more than one data 

let a=["ohith",10,"naveen"]
console.log(a)
a.push("hello")//To pust an element at the end of an array
console.log(a)
a.pop()//removes the last elemt in an array
console.log(a)
a.unshift(1)//add an element at the begining of an array
console.log(a)
a.shift()//remove an element at the begining of an array 
console.log(a)
console.log(a.length)//length of an array
//For in loop for pring all the elements of an array 
for(let i in a){
    console.log(a[i])
}
//For of loop for pring all the elements of an array 
//for of returns the element whereas for in returns idex of the element 
for(let k of a){
    console.log(k)
}
  

//For loop
for(let j=0;j<a.length;j++){
    console.log(a[j])
}

//sort an array
console.log(a.sort())
console.log(a.sort().reverse())//sort an array and reverse the array 

//2D Array
//used Online compiler for prompt
/*
let r=+prompt()
let c=+prompt()

const m=[]

for(let i=0;i<r;i++){
    var rm=[]
    for(let j=0;j<c;j++){
        let element=+prompt();
        rm.push(element);
    }
    m.push(rm)
}
var rm=[]
for(let i=0;i<r;i++){
    let s=''
    for(let j=0;j<c;j++){
        s=s+m[i][j]+" "
    }
    console.log(s)
}
    */