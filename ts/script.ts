console.log("hello world");

var n: number = 3;

var m: string = "hola";

console.log(add(n, n));
console.log(sub(n, n));

function add(addend1: number, addend2: number): number {
  return addend1 + addend2;
}

function sub(subtractor: number, subterhan: number): number {
  if (subtractor === 0 || subterhan === 0) {
    return 0;
  }
  return subterhan - subtractor;
}
