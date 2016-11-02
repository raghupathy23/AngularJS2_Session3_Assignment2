// A. Map & Set

var a = {};
var b = 20;
var c = "Hello";

var mymap = new Map();

mymap.set(a, 100); // Added values using set()
mymap.set(b, "ES - Part 2");
mymap.set(c, {org: "Acadgild"});

// Output : Map {Object {} => 100, 20 => "ES - Part 2", "Hello" => Object {org: "Acadgild"}}

// Set()

var myset = new Set();
myset.add(100); // Added values using add()
myset.add("Angular 2");
myset.add("ECMA Script");

// Output : Set {100, "Angular 2", "ECMA Script"}

myset.has(100); // true

// Iterating using for loop

myset.forEach(function(value, key) {
console.log(value, key);
});

/* output :
100 100
Angular 2 Angular 2
ECMA Script ECMA Script
*/

var stringArray = ["Hello","World","Test"];
var myset = new Set(stringArray);
myset.has("Hello"); // true

// Displaying all values of array in one time using Spread Operator
function displayarray(i, j, k){
console.log(i, j, k);
}
displayarray(...stringArray);

// Output : Hello World Test
