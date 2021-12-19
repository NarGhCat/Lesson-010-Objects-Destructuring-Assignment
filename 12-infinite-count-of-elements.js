'use strict';

function printSum(sign, ...rest) {
  
  if (sign === "*") {
    let result = 1;
    for (let item of rest) {
      result *= item;
    }
    return result;
  } else if (sign === "+") {
    let result = 0;
    for (let item of rest) {
      result += item;
    }
    return result;
  } else if (typeof sign == 'number') {
    let result = sign;
    for (let item of rest) {
      result += item;
    }
    return result;
  } else if (sign === "**") {
    let result = rest[0];
    for (let i = 1; i < rest.length; i++) {
      result **= rest[i];
    }
    return result;
  } else if (sign === "-") {
    let result = rest[0];
    for (let i = 1; i < rest.length; i++) {
      result -= rest[i];
    }
    return result;
  }
}

console.log(printSum(2, 3, 2));