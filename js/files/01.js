//Methods
let a = 500;
console.log("A: " + typeof a, a);
//toString
a = a.toString();
console.log("A: " + typeof a, a);

//clean console
console.log("");

//toFixed: only decimals
let b = 5.55559;
console.log("B: " + typeof b, b);
b = b.toFixed(4);
console.log("B: " + typeof b, b);

//clean console
console.log("");

//toExponential
let c = 50;
console.log("C: " + typeof c, c);
c = c.toExponential();
console.log("C: " + typeof c, c);

//clean console
console.log("");

//toPrecision: naturals more decimals
let d = 19.764;
console.log("D: " + typeof d, d);
d = d.toPrecision(2);
console.log(d);

console.log("");

//number
let z = 5.54;
z = Number(z.toPrecision(2));
console.log(z, typeof z);

//parseFloat
parseFloat("12.6258");
console.log("Float: " + parseFloat("12.6258"));

//parseInt
console.log("Int: " + parseInt("12.6258"));
