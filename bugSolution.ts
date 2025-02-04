function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result = add(10, 20); // Correct
console.log(result); // Output: 30

let result2:number;
let value2 = "20";
if (isNumber(value2)){
  result2 = add(10, Number(value2));
  console.log(result2); // Output: 30
}

else{
  console.log("The second value is not a number");
}

let result3:number;
let value3 = 20;
if (isNumber(value3)){
  result3 = add(10, value3);
  console.log(result3); // Output: 30
}

else{
  console.log("The second value is not a number");
}
