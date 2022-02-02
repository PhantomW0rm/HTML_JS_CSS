/*
  TODO: FUNCTIONS!
  * a block of code that does a thing!
  * they are evoked or 'run' when something calls them
  * DRY principles
  * they can take arguments
  * are globally scoped
*/

function log(message) {
    console.log(message);
  }
  
  log(`Hello World!`);
  
  // ? RETURNS
  
  // * when a function reaches a return statement
  // * it stops
  
  let hi = true;
  
  function hello() {
    log(hi);
    return hi = false;
  }
  
  hello();
  
  // VARIABLE RETURNS
  
  function sum(a, b) {
    return a+b;
  }
  
  log(sum(14,21));
  
  // ! ARROW FUNCTIONS
  
  // function goodbye(message) {
  //   console.log(message);
  // }
  
  // goodbye = (message) => {
  //   return console.log(message);
  // }
  
  // goodbye = (message) => console.log(message);
  
  goodbye = message => console.log(message);
  
  
  goodbye(`bye now`);