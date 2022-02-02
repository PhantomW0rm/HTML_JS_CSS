// Exercise 1

let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

// Exercise 2

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// Exercise 3


let MyArray = ["hello",'everyone'];

console.log(MyArray.length);

MyArray.push("goodbye");

console.log(MyArray.length);

MyArray.shift();

for(let EachElement of MyArray) {
     console.log(EachElement);
}