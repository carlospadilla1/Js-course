//Search in string

let StringText = "We are coding functions and methods in JavaScript";

console.log(StringText.indexOf("coding"));
//buscará a partir de la coordenada 11
console.log(StringText.indexOf("in", 11));
//buscará la última coincidencia
console.log(StringText.lastIndexOf("in"));
//look the first match
console.log(StringText.search("s"));

//Only in case to exist the coincidence
console.log(StringText.includes("We are"));
console.log(StringText.toUpperCase().includes("JAVASCRIPT"));

//Methods Start With and End whit
console.log(StringText.toLowerCase().startsWith("are", 3));
console.log(StringText.toUpperCase().endsWith("JAVASCRIPT"));