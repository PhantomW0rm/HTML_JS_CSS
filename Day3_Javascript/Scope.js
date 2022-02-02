//Exercise 1

function scope() {
    let x = "foo";
    if (x == "foo") {
      let y = "boo";
    }
    console.log(x); // Works with just this 
    console.log(y); // Causes a reference error due to y never being declared outside the block
  }
  scope(); //calls the function

  //Exercise 2

// causes a reference error as a was never declared as a variable

  function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();