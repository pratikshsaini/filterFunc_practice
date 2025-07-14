let arr = [1, 2, 3, 4];
let evenArr = arr.filter((x) => {
  return x % 2 == 0;
});
console.log(evenArr);

// ...............................................

let values = [0 , "hello", false, 42, "", null]
let truthy = values.filter(Boolean)
console.log(truthy);

// ...............................................


