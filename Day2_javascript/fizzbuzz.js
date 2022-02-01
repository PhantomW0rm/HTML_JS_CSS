`strict mode`;

for (let i = 0; i<=100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz")
    } 
    else if (i % 5 == 0) {
        console.log("buzz")
    } 
    else if (i % 3 == 0) {
        console.log("fizz")
    }
    }

//Shortened version
for (let j =0; j<=100; j++) {
j % 3 == 0 ? console.log("fizz"): j % 5 == 0 ? console.log("buzz"): (j % 5 == 0 && j % 3 == 0) ? 
console.log("fizzbuzz"): ""
}