/*
var x = 7;
function getName() {
  console.log(`Namaste JS`);
}

getName();
console.log(x);

// what we will expect the output is: 
// Namaste JS (function invoke)
// 7
*/

// ---------------------

// BUT WHEN WE DO LIKE THIS

/*
getName(); // HERE we are calling the function before declaring, most of the language gives error, because we are accessing before declare
console.log(x);

var x = 7;
function getName() {
  console.log(`Namaste JS`);
}

// here  the output is 
// Namaste JS
// undefined // this is because of Hoisting

*/

// ------------REASON HOW THING WORK BEHIND THE SCENES -----------

/*
whenever  we run the javascript code, a execution context is created , there are 2 components in that
memory creation phase and code execution phase, so the answer lies there only, 
Even the whole code, starts executing  , the memory is assigned to each variable and function 

Ex -> Go to source (browser) -> Add debuger before var x = 7 
and check in callStack -> Scope is the memory Space -> Global memory,
so all already x is allocated before initialising before the line executing
so it stored undefined to it and in function whole code is stored into it
thats why it is showing undefined


getName();
console.log(x);

var x = 7;
const getName = ()  => {
  console.log(`Namaste JS`);
}

- Note -> If we write the arrow function , It just behaves like the variable, 
so in the global memory space in scope -> getName and x both are undefined

-> and if we write the function like below: 
const getName2 = function() {
  console.log(`Namaste JS`);
}

then also, it behaves just like a variable, getName2 im global memory it stores undefined to it 
so when the call The function getName2(); it throws error because it is not a function 

So It Will only work in the traditional function, and we can access the code, even before the declaratiom of the function 
*/

// ------------------------ THEORY OF CALLSTACK THAT WE LEARNT IN THE LAST VIDEO ------------------

var x = 7;
function getName() {
  console.log("Namaste JS");
}

// Global Execution is created (anonymous), and it is put insdie the callstack (check in Sources by adding the debugger)
// and the control is line number 3 (jo side par likha hoga)
// and jb new function aayega to anonymous ke upr aajayega (Same name jo funtion ka hoga)
// and jab pura function execute hoga toh it removes from the callstack

// Once every thing is done the callStack is empty Now