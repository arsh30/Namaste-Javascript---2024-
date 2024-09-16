/*
CALLBACK -> 

=> as we know JS is sync single thread language, It execute one task at a time

Note: 
1. callback is a function that is passed as an argument to another function and is executed after some operation has completed 
2. using callback, is a powerfull way to perform async task in JS 

Ex1:

console.log("Namaste");

setTimeout(() => {
  console.log("Javascript");
}, 5000);

console.log("Season 2");

suppose if we want to execute "Javascript" after 5 seconds, 
then we wrap it inside the callback function, and pass it to 
setTimeOut

Now it is job of set time out that it will run after 5 seconds 
so using callback, It is a power way to do async things in Js

ie "we can take a piece of code, inside a function and we can pass 
it as a callback which can be executed later.

-----------
Ex1: 
function greet(name,callback){
  console.log("Hello", name)
  callback();
}

funtion sayGoodBye(){
console.log("Goodbye");
}

greet('Alice', sayGoodBye)

--------
EX2: Ecommerce example: suppose we have some items in cart 

- suppose we have 2 api's -> api.createOrder() (that create order)
                          -> api.proceedToPayment()

- so how it works - first we create Order by using createOrder Api, and once the order is created 
  than only we can proceed to payment, There is dependency into it, 
  so here callback come into picture because it is async task 

const cart = ['Shoes', 'Pants', 'Kurta'];
api.createOrder(cart, function() {
  api.proceedToPayment();
})

Note: we give the function to create Order Api, Now its createOrderApi 
responsibility to create an order an call this function back

// ---------

Ex:3
function hello(callback) {
  setTimeout(() => {
    console.log("Hey there");
    callback();
  }, 2000);
}

hello(function () { // Here we pass the function, and isko hello function ke parameter me recieve krege and then we call this function
  console.log("function 2 called");
});

*/

// =================================

// CALLBACK HELL -> When there are mulitple api's which depend on each other  ,
// means one callback inside there is another callback and then there is another callback,
// and so on, that is called callback hell

// ex: ecommerce example currently we are dependent on one createOrder api , once we create the order
// then only user hit the proceed to payment api , and
// suppose once hi done the payment then only we want to hit the showOrderSummaryApi
// and then we call the updateWalletApi which run only after the showOrderSummary

/*
const cart = ["Shoes", "Pants", "Kurta"];
api.createOrder(cart, function () {
  api.proceedToPayment(function () { // Here when we proceed to payment, jb pura function execute hoga tbhi sirf agla function executes hoga
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
*/

// =================================

// INVERSION OF CONTROL -> It is another problem we see while using callback
// means we loose the control of your code when we are using callbacks

/*
// Example
api.createOrder(cart, function () {
  api.proceedToPayment(); // here we give the control to createOrder api, means it automatically call the proceedToPayment once the createOrder api is successfully hits
  // so it is very risky, we are highly depend on createorder api function

  // createorder api we dont know the code that is written inside this, we are just blindly trusting it, suppose it is not calling the function again
  // so whenever we have the callback function and we pass it to some other function, we are giving our function (piece of code)
  // to some other code, and we dont know what is happening behind the scene
  // this is the common problem when we are using callbacks
});

*/

/*
ISSUES WITH CALLBACK ->
1. Callback Hell
2. Inversion of Control

*/

//==================================

//  EXAMPLE HOW API'S IS CREATED AND WE CALL THIS ->
// Simulating API calls with setTimeout

/*
const api = {
  createOrder: function(cart, callback) {
    console.log("Creating order...");
    setTimeout(() => {
      console.log("Order created.");
      callback(); // Call the provided callback function
    }, 1000); // Simulate async operation with 1 second delay
  },
  proceedToPayment: function(callback) {
    console.log("Proceeding to payment...");
    setTimeout(() => {
      console.log("Payment completed.");
      callback(); // Call the provided callback function
    }, 1000); // Simulate async operation with 1 second delay
  },
  showOrderSummary: function(callback) {
    console.log("Showing order summary...");
    setTimeout(() => {
      console.log("Order summary displayed.");
      callback(); // Call the provided callback function
    }, 1000); // Simulate async operation with 1 second delay
  },
  updateWallet: function(callback) {
    console.log("Updating wallet...");
    setTimeout(() => {
      console.log("Wallet updated.");
      if (callback) callback(); // Call the provided callback function if it exists
    }, 1000); // Simulate async operation with 1 second delay
  }
};

// Example usage with nested callbacks
const cart = { items: ['item1', 'item2'] };

api.createOrder(cart, function() {
  api.proceedToPayment(function() {
    api.showOrderSummary(function() {
      api.updateWallet(function() {
        console.log("All steps completed.");
      });
    });
  });
});


*/

