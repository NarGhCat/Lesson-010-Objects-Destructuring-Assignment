'use strict';

let person = { name: "Sarah", country: "Armenia", job: "Developer" };
let {name, country = "Nigeria", job} = person;
console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"