let personas = ["Carlos", "Juan", "Miguel"];
console.log("personas: ", personas);

//new Set()
const brands = new Set(["Gucci", "Valentino", "Balenciaga", "Gucci"]);
console.log("brands: ", brands);

//Set Methods:
brands.add("LV");
brands.delete("Valentino");

console.log(brands);

//Example

const vehiculos = new Set(["Starlet", "Hilux", "Liberty"]);
console.log(vehiculos.has("Starlet"));
console.log(vehiculos.has("Aveo"));
