//(1)primitive datatypes
// 7 types: string, number , boolean , null,undefined,symbol,bigInt,

const score=100
const scoreValue=100.3

const lisLoggedIn=false
const outsideTemp=null
let userEmail; //undefined

const id= symbol('123')
const anotherId= symbol('123')

console.log(id===anotherId);// false

const bigNumber = 34565734562387n // output:-bigInt





//(2)Reference datatype (non-primitive)
//  includes:-Array, objects, funcitons,

const heroes = ["shaktiman", "nagraj", "doga"]

    let myObj={
    name: "apoorva"
    age: 22
}

 const myFunction= function(){
    console.log("Hello World");
 }

 console.log(typeof bigNumber); //bigNumber=34565734562387n output= bigInt
 console.log(typeof scoreValue) //output:-numberj





 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                      //Types of//
 // Stack (primitive)
 //Heap   (non-primitive)   
 
 let myYoutubename="apoorvadotcom"
 let anothername= "chaiaurcode"
 console.log(myYoutubename); //output:-apoorvadotcome
 console.log(anothername); //outpur:-chaiaurcode


 let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
 }
 let userTwo= userOne
 userTwo.email ="apoorva@google.com"

 console.log(userOne.email);// Output:-apoorva@google.com 
 console.log(userTwo.email);// Output:-apoorva@google.com 

 //STACK MEMEORY
 function add(a, b) {
    let sum = a + b;
    return sum;
  }
  
  let result = add(10, 5);



  //DYNAMIC MEMORY
  let person = {
    name: "Alice",
    age: 30
  };
  
  function updateAge(obj, newAge) {
    obj.age = newAge;
  }
  
  updateAge(person, 31);
  


//   Stack Memory (LIFO):
// ====================
// |     add() call    | <- Top of the stack
// |  result variable  |
// |      main()       |
// ====================

// Heap Memory (Dynamic Allocation):
// ===================================
// |     person Object                |
// |  { name: "Alice", age: 30 }      |
// |   obj reference in updateAge()   |
// ===================================

  