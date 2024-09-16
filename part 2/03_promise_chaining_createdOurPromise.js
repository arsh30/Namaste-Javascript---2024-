// PREVIOUSLY WE HAVE CONSUME A PROMISE, MEANS IF API (OR ASYNC OPERATION) WHICH RETURN A PROMISE, HOW DO WE HANDLE THAT,we talked about that
// IN THIS WE CREATE OUR OWN PROMISE

// we have 2 apis of an ecommerce website
// createOrder(cartId);
// proceedToPayment(orderId)

/*
const cart = ["Shoes", "Kurtas", "Pants"];

const promise = createOrder(cart); // CONSUMING THE PROMISE
promise.then((orderId) => {
  console.log(orderId); // Got the order Id
  // proceedToPayment(orderId);
}).catch((error) => { // failure callback, if promise fail this callback will run, ALWAYS DO THIS, WHEN ANYTHING RETURN A PROMISE 
  console.log("Error", error);
});


// ------------ PRODUCER PART START ----------------

// CREATING OUR PROMISE - we can reject or resolve and send to the consumer Jo upr kiya hai

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) { // new Promise is a constructor, and constructor takes a function which has resolve and reject
    // this resolve and reject aare function given by JS to build promises
  
    // This will contain the logic for create Order function
    // 1 createOrder
    // 2. validate Cart
    // 3. return OrderId

    if (!validate(cart)) {
      const error = new Error("Cart is not valid");
      reject(error.message);
      // 1. red color error (In Console) means we did not handle the error properly, 
      // and we as a developer never do this

      // 2. if we put this on production, this will fail in user computer,
      // they will silently get the error in their browser console and user will not see anything on the page
      // so we should always gratefully handle this by writing catch block also
    }

    // logic for createOrder
    const orderId = "12345"; // got from db
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

function validate() {
  return false; // false means we are rejecting the error
}

*/

// ================== PROMISE CHAINING IN THE ABOVE CODE ===================

/*
const cart = ["Shoes", "Kurtas", "Pants"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => { // Here upr se aayi
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => { // proceedToPayment Api ne data diya, and usko hum use krre hai
    return console.log(paymentInfo);
  })
  .catch((error) => {
    // failure callback, if promise fail this callback will run
    // if there is any error in the above then function chainging, then 
    // this catch will handle all this
    console.log("Error", error);
  });

// CREATING OUR PROMISE - we can reject or resolve
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validate(cart)) {
      const error = new Error("Cart is not valid");
      reject(error.message);
    }

    // logic for createOrder
    const orderId = "12345"; // got from db
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment successfull");
  });
}

function validate() {
  return true;
}

*/

// ======================= EXAMPLE 2 OF PROMISE CHAINING ... ======================

/*
const cart = ["Shoes", "Kurtas", "Pants"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    // Here upr se aayi
    return proceedToPayment(orderId); // This is also a promise which we are returning, [return 2 cheeze ho sakti hai, either data, and Promise, jisko neeche resolve karna pdhega in the next step]
  })
  .then((paymentInfo) => {
    // proceedToPayment Api ne data diya, and usko hum use krre hai
    return console.log(paymentInfo);
  })
  .catch((error) => {
    // failure callback, if promise fail this callback will run
    // if there is any error in the above then function chainging, then
    // this catch will handle all this
    console.log("Error", error);
  })
  .then((response) => {
    console.log("Response"); // Note: agr upr ke Kisi bhi Then me error aayega, to catch run krega
    // catch ke baad bhi agr .then hai toh bhi definitely run krega
    // Agr hum chahte hai ki sirf createOrder ko hi validate kre
    // to catch udr lgayege bass, and uske niche sare then chlege
  });

  *******************

// CREATING OUR PROMISE - we can reject or resolve
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validate(cart)) {
      const error = new Error("Cart is not valid");
      reject(error.message);
    }

    // logic for createOrder
    const orderId = "12345"; // got from db
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment successfull");
  });
}

function validate() {
  return true;
}

*/

// ==================== OVERALL WHAT WE WILL LEARN =================

/*
1. How can we create our own promises ie -> by using new Promise( (resolve,reject) => {} ); 
  resolve and reject are given by JS, and we can resolve the promise only once
  not twice, and we can do just resolve or reject (nothing else)

2. How do we through error while we creating promise ? 
  -> const err = new Error("Cart is not valid"); //
  reject(err)

3. How do you catch error on frontend?
 -> by using catch method, and then we attach the callback function 
 this will catch all the error which are thrown,
 it was thrown in browser console, but we gracefully handle this, 
 by attaching the failure callback using catch function


 Note -> 
 - If there is a long chain, and we want to catch error , just for a specific 
 portion of the chain, what we will do , we just place a catch method just below of the portion
that catch will handle all the error on the top of it 


- If we place, just at the last of the chain, it will handle errors 
  for all the top of the chain

*/

// ----------------------- homework promise chain  --------------------

// Hw -> suppose in Ecommerce we have  - createOrder, proceedToPayment, showOrderSummary, updateWallet
// Made all these function which return the promise and do the promise chaining,
// also handle the error

/*
const cart = ["Shoes", "Kurtas", "Pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    console.log("Payment Infoi", paymentInfo);
    return proceedToPayment(orderId)
  }).then(function() {
    
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validate(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
    }

    const orderId = "23112";
    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve({
        message: `Payment Successfull for orderId: ${orderId}`,
        amt: 2500,
      });
    } else {
      reject("Order Id is not there");
    }
  });
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise((resolve, reject) => {
    if (amt >= 2000) {
      resolve({
        message: `you have ordered item that cost ${amt}Rs`,
        amt: 2500,
      });
    } else {
      reject();
    }
  });
}

function validate(cart) {
// code to validate cart
  return true;
}

*/

// ====================== FINISH =======================
