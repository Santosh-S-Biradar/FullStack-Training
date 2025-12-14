// let date = new Date();
// console.log(date); // ✅ This prints the full Date object
// console.log(date.toString()); // ✅ This prints the date in human-readable format
// console.log(date.toDateString()); // ✅ This prints only the date part (no time)
// console.log(date.toLocaleString())

// let date=new Date(2001,5,16)
// console.log(date.toDateString())

//  let date1= new Date(2001,5,16,11,11)
//  console.log(date1.toLocaleString())
// console.log(date1.toISOString())
// console.log(date1.toJSON())

 //timestamp
// let timestamp = Date.now()
// console.log(timestamp)
// console.log(date1.getTime())
// let timestamp=Date.now()
// console.log(timestamp)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDate())
console.log(`${newDate.getDay()} and the time is ${newDate.toLocalTimeString()}`);
// console.log(newDate.getMonth())
// console.log(newDate.getTime())
// console.log(newDate.getTimezoneOffset())

