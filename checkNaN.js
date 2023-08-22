// *Basic dhoroner type check:
// String, number, boolean

const value = "66";
if (value === "number") {
  console.log("This is Number");
} else {
  console.log("This is not number");
}

// Array type Check
// Array check korte hoi, Array.isArray() diea.
const value2 = [22, 33, 44];
console.log(Array.isArray(value2));

// Object check
const value3 = { name: "Rasel Kabir", job: "tension kora" };
console.log(typeof value3);

// NaN-not a number. NaN check korbo, isNaN() ei function ta diea, eta jodi true hoi taile value ta number na, ar jodi false hoi taile number.
console.log(isNaN(2));
console.log(isNaN("56"));
console.log(isNaN("ab"));
console.log({});

// Note:
// ekane is NaN e number dile false bolbe,
// ekane is NaN e string er modde number dileo false bolbe,
// ekane is NaN e string er modde character dile true bolbe,

// Extra:
// search wat javascript
// undefines in javascript
