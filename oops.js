//oops
// why use Oop: Reuselability,Readablity,
// Object
// class
// constructure function
// prototypes
// instances
// pillasrs
// object has two parts 1=> states/properties has=> Name,cost,milage
// 2=> behavior does, start(),acclerate(),stop()->mehods/functions

// const car={
//     brand: "toyota",
//     color: "Black",
//     drive: function(){
//         console.log("Car is Driving")
//     }
    
// };
// car.drive();

//Parts of oop in js
//1.constructor function

// class car{
//     constructor(brand,color,speed){
//        this.brand=brand
//         this.color=color
//        this.speed= speed
       
//        };
//        drive(){
//          console.log(`${this.brand} is driving at ${this.speed}`);
//        }
    
//     brake(){
//          console.log(`${this.brand} has stopped`);
//     }
// }

// const c1=new car("toyota","white","110");
// const c2=new car("Tesla","Black","150") ;
// c1.drive();
// c1.brake();

//prototype
// function Car(brand){
//     this.brand=brand
//     this.drivs=function(){
//         console.log(`${this.brand}`);
//     };

// }
// const c1 = new Car("toyota")
// const c2=new Car("tesla")
// console.log(c1.drive===c2.drive)

// function Car (brand){
//    this.brand=brand;
// }
// Car.prototype.drive=function(){
//     console.log(`${this.brand} is driving`)
// }
// const c1=new Car("Benz")
// const c2=new Car ("Scorpio");
// c1.drive();
// c2.drive();
// console.log(c1.drive===c2.drive)
// console.log(c1.toString());
// c1->Car.prototype-> Object.prototype->null

//classes
// class User{
//     Constructor(name,age){
//       this.name=name;
//       this.age=age;
//     }
//     say(){
//         console.log(`Hi, i am ${this.name}`);
//     }
// }

// const u1=new User("alex","24")
// u1.say();

//encapsulation

// class BankAccount{
//    #balance=0;
//    deposite(amount){
//     if(amount > 0) this.#balance+=amount

//    } 
//      get balance(){
//         return this.#balance
//      }
    
// }
// const acc=new BankAccount();
// acc.deposite(1000);
// console.log(acc.balance)

// Inheritance
// class vehicle{
//     constructor(brand){
//         this.brand=brand
//     }
// drive(){
//     console.log(`${this.brand} is driving`)
// }
// }
// class car extends vehicle{
//     constructor(brand,model){
//         super(brand)
//         this.model=model;
//     }
//     honk(){
//         console.log(`${this.brand} ${this.model} is honking`);
//     }
// }
// class electriccar extends car {
//     constructor(brand,model,battery){
//         super (brand,model,);
//         this.battery=battery;
//     }
//     charge(){
//         console.log(`${this.brand} ${this.model} ${this.battery} is charging`);
//     }
// }
// const c1= new electriccar("toyota","Model 2","70kwh")
// c1.drive();
// c1.honk();
// c1.charge();


// polymorphism
//1-> Subtype polymorphism (inheritance-based)
// class Payment{
//     pay(amount){
//         console.log(`Default pay ${amount}`);
//     }
// }

// class Upipayment extends Payment{
//     pay(amount){
//         console.log(`Paying ${amount} via UPI`)
//     }

// }
//  class CardPayment extends Payment{
//     pay(amount){
//         console.log(`Paying ${amount} via Card`)
//     }
//  }
//   function checkout(payMethod, amount){
//     payMethod.pay(amount)
//   }
//   checkout(new Upipayment(),500)
//   checkout(new CardPayment(),1000)

//2 Duck typing (Structural polymorphism)
// no inheritance
function sendMail(mailService){
    mailService.send("This is a test mail");
}

class GmailService {
    send(message){
        console.log("Sending via Gmail: " + message);
    }
}

class OutlookService {
    send(message){
        console.log("Sending via Outlook: " + message);
    }
}

class YahooService {
    send(message){
        console.log("Sending via Yahoo: " + message);
    }
}

// Create instances
const gmail = new GmailService();
const outlook = new OutlookService();
const yahoo = new YahooService();

// Call the function with different services
sendMail(gmail);  
sendMail(outlook)  
sendMail(yahoo);   
