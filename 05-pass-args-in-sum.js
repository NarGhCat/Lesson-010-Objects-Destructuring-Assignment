'use strict';

function sum([x, y, z] = numbers) {
    return x + y + z;
    }
const numbers = [1, 2, 3];
console.log(sum()); // prints 6