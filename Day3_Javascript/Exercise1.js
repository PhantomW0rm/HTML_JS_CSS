'use strict'

let animal = new Object();
console.log(typeof(animal));

animal["name"] = "clifford";
animal["type"] = "dog";
animal["size"] = "big";

console.log(animal);

animal.colour = "red";

console.log(animal);

let vehicle = {
    "type" : "bike",
    "seats" : 1,
    "wheels" : 2
}

console.log(typeof(vehicle));
console.log(vehicle);

let garage = [
    vehicle,
    {"type" : "car", "seats" : 5, "wheels" : 4}
]

console.log(typeof(garage));
console.log(garage);