// Write a function which take a array of integer and check is there any value is unique or not duplicate and retun it.

// [1, 1, 2, 2, 5] => 3
// [] => 0

// Time complexity = o(n)
// function checkUniqueValue(arr) {
//   if (arr.length === 0) {
//     return 0;
//   };

//   const output = {};

//   for(var num of arr) {
//     if(output[num]) {
//         output[num] = output[num] + 1;
//     } else {
//         output[num] = 1;
//     }
//   }

//   return Object.keys(output).length
// }

// Time complexity = o(n) - using two pointers
function checkUniqueValue(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(checkUniqueValue([1, 1, 2, 2, 5]));
