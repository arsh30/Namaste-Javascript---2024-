/*
-> promises are used to handle asyn operations in JS 

How we do before promises?
Ex: suppose we have ecommerce website, and have a cart have some items 
and we have 2 api;s
createOrderApi => which creates the order and return the orderId 
2nd api proceedToPaymentApi => this api takes the orderId and this will proceed to Payment

so these 2 apis are async, we dont know how much time it will take
and they are dependent on each other

we can only proceedToPayment when we done order

-------

So how can we use this?
1. using Callback -> means a function which takes another function as a argument that is called callback

const cart = ["Shoes", "Kurtas"];
createOrder(cart, function () {
  proceedToPayment();
});

so what is the issue while using Callback?
S) The issue is Inversion of Control -> We lost our control from the code, we pass this function to createOrderApi, 
  and we just sit, and wait this callback function will call after it,
  suppose if it not calls the callback function, and this 
  createOrder Api is not written by us? Then what can we do?


So We can Handle This by using promises

- So if we were designing the apis we would  designed our api in such a way 
 will no longer take a callback function,
 and it will return a promises

- Promises is nothing, but a  Empty object with some {data:value} to it
- {data:value}; // the value is  hold whatever the api returned to us, initially it is undefined 
                // and suppose after 5 second whenever the data comes, it will createOrder
                // it will fill the object back at some later point of time , parallely the program is keep executing 
                // the value automatically fills that object
 
  const cart = ["Shoes", "Kurtas"];
  
  const promise = createOrder(cart); // This api is async and it will return some promise, initially it is undefined, when the data comes after certain amount of time, it automatically fills in the promise variable 
  promise.then(function () { // Here we are attaching our callback function with the promise, so when ever we got the value then this callback value will run and give us the output
    proceedToPayment(); // here we have control to our code, previously in callback we are passing the function to other function where we lost our control 
                        // so JS says this function will 100% run once the value is got,
                        // and in the above code we dont have any guarantee
  });

  Note: 
  jab tak promise undefined hai ya pending state me hai, and suppose neeche kuch lines hai toh vo sab execute hoti rhegi
  and parallely promise bhi fill hota rhega 
  and as soon as promise object fills with data, it will automatically our callback function 
  and it will run the callback function only once when the data comes, 
  but in callbacks it is not true, it calls the callback function any time
*/

// =========================== EXAMPLE 2 ==========================

/*
const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API); // fetch function return a promise
console.log("user", user);


// 1. Initially the user is undefined  means it is in pending state and once the data came it is in fullfilled state
// 2. The promise has 3 states only, pending, fullfilled, rejected
// 3. promises are immutable 
// 4. we can not run resolve twice, it runs only one time


// How to attach the event listner to display the result
user.then(function (data) { // This will automatically run once the result has come
  console.log("Data", data);
});

*/

// =========================== INTERVIEW QUES ==========================

/*
1. what is promise?
S. promise is a object that represent eventual completion or failure of an async operation
promises has 3 state ie pending,fulfilled, rejected

b) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
c) A promise resolves only once and it is immutable in nature. 
d) Using .then() we can attached the cb(callback) function.


2. Suppose multiple apis are dependent on each other,and there is pyramid OF dOM (Callback hell) 
is happening so to avoid this also , 
we can use promise chaining.

const cart = ["Shoes", "pants"];

createOrder(cart)
  .then(function (orderId) {
    // suppose createorder api return a promise then we attaching the callback over here
    return proceedToPayment(orderId); // Note: when we do chaining, always write return keyword, when we want to execute the other function
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (wallet) {
    return updateWalletBalance(wallet);
  });
*/



