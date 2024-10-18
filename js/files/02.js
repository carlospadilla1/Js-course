//objects
let user = {
  Name: "Carlos",
  LastName: "Padilla",
  Age: 20,
  Birthday: "2004/04/17",
};
console.log(user);

// String Methods
let UserName = "Carlos Padilla";
let Address = "El Hatillo, Caracas.";
console.log(`Address:`, Address.length, `User name:`, UserName.length);

// slice
console.log(Address.slice(0, 10));
console.log(Address.slice(12, 19)); //Or Negative slices
console.log(Address.slice(-8, -1));

//Replace
console.log(UserName.replace("Padilla", "Padilla Ortega."));

//ReplaceALL
let coincidences = "Lorem kitchen, Lorem kitchen, Lorem kitchen!";
console.log(coincidences.replaceAll("Lorem", "clear")); 

//Upper
console.log(coincidences.toUpperCase());
//Lower
console.log(coincidences.toLowerCase());

//trim
let NewVar = "   Hi! How are you?   ";
console.log(NewVar.trimStart());
console.log(NewVar.trimEnd());