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
