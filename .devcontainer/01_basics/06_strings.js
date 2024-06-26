const name="apoorva"
const repoCount=50

//console.log(name+repoCount+"Value"); //output:- apoorva50 Value

console.log('Hello my name is $[name] and my repo count is $[repoCount]');
//modern way of coding and more reliable during backend as compared to above.
//Output:- Hello my name is apoorva and my repocount is 50 //


const gameName = new String('apoorva-p');
console.log(gameName [0])//accessing zeroth array //output:-'a'
//output :-is in string  i.e. "apoorvap"


//split string example
let sentence = "The quick brown fox jumps over the lazy dog";

let word = sentence.slice(4, 9);
console.log(word); // Output: "quick"

let endOfSentence = sentence.slice(-8);
console.log(endOfSentence); // Output: "lazy dog"

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let lastTwoFruits = fruits.slice(-2); 
console.log(lastTwoFruits); // Output: ["Date", "Elderberry"]




console.log(gameName.__proto__);

console.log(gameName.length);//8
console.log(gameName.toUpperCase()); //APOORV-AP
console.log(gameName.charAt(2)); //'o'
console.log(gameName.indexOf('v')); //5


const newString= gameName.substring(0,4)
console.log(newString); //apoo (4 is excluded)

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne= "  apoorva  "//lots of space
console.log(newStringOne); //  apoorva   (start and end space avail)
console.log(newStringOne.trim());//apoorva(all spaces trimmed)
//trimstart() and trimend() for reducing only frm start and end k

const url="https://apoorva.com/apoorva%20pandey"
console.log(url.replace('%20','-')) //replace first from second 
console.log(url.includes('Sabrina Carpenter'))//"false" as it is not present
console.log(gameName.split('-')); //'apoorva' , 'p'  