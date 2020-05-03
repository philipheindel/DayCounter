"use strict";
console.log("hello world");
var n = 3;
var m = "hola";
console.log(add(n, n));
console.log(sub(n, n));
function add(addend1, addend2) {
    return addend1 + addend2;
}
function sub(subtractor, subterhan) {
    if (subtractor === 0 || subterhan === 0) {
        return 0;
    }
    return subterhan - subtractor;
}
