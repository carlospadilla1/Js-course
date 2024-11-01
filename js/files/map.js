const students = new Map([
  ["Carlos", 70.15],
  ["Juan", 15.36],
  ["Christian", 56.81],
]);

console.log(students);

//Set: add new item.
const dataCars = new Map([]); //new empty map created.
dataCars.set("Aveo", 1); //adding a new item at empty space.

//showing in console
console.log(dataCars);

//Set Example
students.set("Javier", 80.1);
console.log("students: ", students);

//Get: to take a value to pin
console.log(students.get("Juan"));
