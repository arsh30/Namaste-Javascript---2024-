/*
function a() {
  console.log(b); //can we access b inside the function a?
  // when js reaches this line of code, it checks in LOCAL MEMORY that b is present or Not
  // Local Memory means a() ka jo Execution context hai uske andr try krega b ko find krne ka 
  // It will not there, what will it print because we never create b in that function?

  // Output:10
  
}

var b = 10;
a();
*/

// ------Example 2 ->
/*
function a() {
  c();
  function c() {
    console.log(b); // It will again print 10, so when we declare the variable outside the function and try to use inside the function or nested function, we can able to access the variable which is in global space, but its vice versa is not true, so Here scope comes into the Game
  }
}

var b = 10;
a();
*/

// ------- Example 3 ->
/*
function a() {
  console.log(b);
  c();
  function c() {
    console.log(b);
  }
}

console.log(b); // we can not use this, because it it inside the function a 
a();
*/

// ========================= DO WITH EXECUTION CONTEXT =======================
/*
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);

In call Stack, a GEC is created and it is pushed inside the stack 
It has 2 component Memory creation and code execution , so in first phase, 
it will try to assign the values to Global variables and functions, so a function is put inside the Execution stack 

Then it invokes the function a , so a GEC is also created , it again has 2 parts memory creation and code execution , 
in memory creation phase, it assign the memory of b and the function c , 
and b is 10, and then the c function invokes 

It again creates a EC context is created , It has again 2 component memory creation and code execution 
but nothing will be there 


So LEXICAL SCOPING COMES INTO THE PICTURE 

So Whenever a execution context is created a LEXICAL environment is also created ,
so lexical environment is the local memory along with the lexical environment of its parent (parent ki local memory)
LEXICAL (means Hierarchy, in sequence)
Ex: in our code, c function is lexical sitting inside the a function (In Heirarchy)
and A function is lexically inside the local scope 

At global level, GEC has also lexicall environment which is null because it is at global level

<----- SO HOW IT IS WORKING ------->

suppose in function c, we are console.log(B); 
but b is not there inside the function c local memory, 
so it goes to the lexical environment of the parent ,
lexically means where the code is actually present , 
so it will search the variable b inside the function a local memory, and it is present 

suppose if we did not declare the variable b inside the function a , 
so it again goes to the lexicall environment of its parent ie a parent 
which is GEC, which points to null, if there also we did not declare the variable b 
so we get the error B is not defined 

*/

// ================================ DEFINTION ==============

// SCOPE CHAIN -> The way of finding the variables, suppose first b finds in the c memory
// and it goes to the parent lexical environment , and search there in the local memory
// suppose it was also not there , it goes to the other parent of lexical environment
// This whole concept is called scope Chain

// or the whole chain of lexical environment is called the Scope chain
// It defines whether a function or variables is present inside the scope or not
// , if the scope chain if finish and the variable is not found, it says its not inside the scope chain

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
