// var s="jain";
// console.log(s);
// s = s.toUpperCase();
// console.log(typeof s);
// var a=null;
// console.log(a);
// console.log(typeof a);
// var b=[1,2,3,4];
// console.log(b);
// console.log(typeof b);
// var c=[1,'c', false];
// console.log(c);
// console.log(typeof c);
// var d={name:"jain",age:20};
// console.log(d);
// console.log(typeof d);


// var color = "black"
// switch(color){
//     case 'blue':
//         console.log("The color is Blue");
//     break;
//     case 'red':
//         console.log("The color is red");
//     break;
//     case 'yellow':
//         console.log("The color is Yellow");
//     break;
//     case 'black':
//         console.log("The color is Black");
//     break;
//     default:
//         console.log("Error occured.......!");

// }

// // Loop Statements
// var i = 0;  //while stmt
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }

// var i = 6;  //do-while stmt
// do{
//     console.log(i);
//     i++;
// } while(i<=10);

// var i = 10;  //while stmt
// while(i>=1)
// {
//     document.write(i+"<br>");
//     i--;
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is divisible by 2");
//     } 
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         console.log(i + " is divisible by 3");
//     }
// }

var a = [1,2,3,4,5,6]   //array
console.log(a)

for(let i of a){
     console.log(i)
}

var obj = {
    name: 'santosh',
    age: '21',
}
   
for(let i in obj){
    console.log(obj[i])
}