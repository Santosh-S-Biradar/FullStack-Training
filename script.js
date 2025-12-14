/*let name="Pratik"
let college="Jain"
console.log("my name is "+name + "my college is"+college)
console.log(`My name is ${name} and my college is ${college}`);

let bio="i am a fullstack developer and a designer"
console.log(bio)
const a=10
const b=3
console.log(`Sum of a and b is ${a + b}`);*/
// forEach map filter and reduce
/*
const a =[1,2,3,4,5]
const result=a.forEach(n =>n*2)
console.log(result);
const result2=a.map((n)=>n*2)
console.log(result2)*/
    
/*var display ={
    Firstname:"pratik",
    Lastname:"pawar"
    age:"21"

    }
 console.log(display)
 var details={}

details.Fname="pratik"

details.LatName="pawar"

details.age="21"

console.log(details)

console.log(details.LatName)

console.log(details.age)
var info=new Object()
info
*/
//filter
/*const array=[1,2,3,4,5,6,7,8,9,10];
const result=array.filter((array)=>array%2==0);
console.log(result);
console.log(array);

const fruits =["apple","banana","mango","orange","kiwi"]
const res =fruits.filter((fruits)=>fruits.length>4);
console.log(res);

const users = [
  { name: "Alice", age: 20, branch: "CS" },
  { name: "John", age: 22, branch: "EC" },
  { name: "Bob", age: 20, branch: "CS" },
  { name: "Charlie", age: 23, branch: "EC" },
  { name: "Bean", age: 22, branch: "CS" },
  { name: "Ali", age: 19, branch: "EC" }
];

// Filter users with age > 20
const userResult = users
  .filter(user => user.age > 20)
  .map(user => user.branch);

console.log(userResult);*/

//rest in spread operator
//rest is used to combine elements
// spread is used to spread elements 

/*const arr=[1,2,3,4,5];
const arr2=[6,7,8, ...arr];
console.log(arr2);
const copy=[...arr];
console.log(copy);
const obj1={name:"alice",age:40,branch:"CSE"};
const obj2={...obj1,name:"john"};
const {branch}=obj1;
 obj1.age=50;
console.log(obj1);
console.log(obj2);*/
    // rest
  function addNums(a,b,c,...rest){
    console.log(rest);
     return a+b+c+rest.reduce((acc,curval)=>{
       acc+curval;
            
      },0);
    }
   console.log(addNums(5,6,9));
    console.log(addNums(5,6,9,5,4));

    function add(a,b,c){

    }
    const number=[1,4,6];
    console.log(add(number[0],number[1],number[2]));
    console.log((add)(...number));




