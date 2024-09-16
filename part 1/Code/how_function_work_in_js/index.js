var x = 1;
a();
b();
console.log(x); 

function a() {
  x = 10;
  console.log(x); 
}

function b() {
  x = 100;
  console.log(x); 
}

// op 10 , 100, 1

// REASON -> 
/*
when a js run everytime, a global execution is created, and it will have 2 component  into it 
ie memory component and code component and there are 2 phases in the that, 
memory creation and code execution 

so in the first phase, the memory will allocate to all the variable with undefined and functions with as it is 
whole code 

so when the a function is invoked, a brand new execution context is created and it will have another 2 compoennts inside that 
memory and code of execution and there are 2 phases inside that ie memory creation and code execution 
so in that function x is undefined initially after that is update to 10 
and js search the x inside the local memory 

note: 
jabhi 1 new func invoked hoga to 1 execution stack create hoga and vo append hojayega into the call stack, 
jab js top to bottom run hogi, toh 1 GEC create hoga, usi me sab kuch aayega
and jab sari lines execute hojayegi tab vo bhi hat jayega
*/