`use strict`

//let let = 2;

console.log("Hello World!");

let text = `this is a message`;

console.log(text);

console.info(text);

console.warn(text);

console.error(text);

console.log(`%c` + text, `color:black; background-color:white; font-size: 20px; padding: 10px;`);

console.log(`%c` + text + ` ` + `%c` + text, `color: red;`, `color:blue;`);