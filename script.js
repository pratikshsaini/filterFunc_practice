let arr = [1, 2, 3, 4];
let evenArr = arr.filter((x) => {
  return x % 2 == 0;
});
console.log(evenArr);

// ...............................................

let values = [0, "hello", false, 42, "", null];
let truthy = values.filter(Boolean);
console.log(truthy);

// ...............................................

let user = [
  { name: "A", age: 16 },
  { name: "B", age: 20 },
];
let adult = user.filter((x) => {
  if (x.age > 18) {
    return x;
  }
});
console.log(adult);

// or (Another Way)

let adult2 = user.filter((x) => {
  return x.age > 18;
});
console.log(adult2);

// ...............................................

let words = ["car", "airplane", "cat", "motorcycle"];
let letter5 = words.filter((x) => {
  return x.length > 5;
});
console.log(letter5);

// ...............................................