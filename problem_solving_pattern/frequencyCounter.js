// Write a function which take 2 array as a input and return true if they have same frequency with squares of values

// [1, 3, 4] and [1, 9, 16] => true
// [1, 3, 4] and [1, 9, 18] => false
// [2, 5] and [4, 25, 25] => false

function sameFrequency(arr1, arr2) {
  // check length
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const findIndex = arr2.indexOf(arr1[i] * arr1[i]);
    if (findIndex === -1) {
      return false;
    }

    arr2.splice(findIndex, 1);
  }
  return true;
}

console.time("sameFrequency");
console.log(sameFrequency([1, 3, 4, 4], [1, 9, 16, 16])); // true // O(n^2) time complexity
console.timeEnd("sameFrequency");


function sameFrequency2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  };

  const frequency1 = {};
  const frequency2 = {};

  for(var num of arr1) {
    if(frequency1[num]) {
      frequency1[num] = frequency1[num] + 1;
    } else {
      frequency1[num] = 1;
    }
  }

  for(var num of arr2) {
    if(frequency2[num]) {
      frequency2[num] = frequency2[num] + 1;
    } else {
      frequency2[num] = 1;
    }
  }

  for(var key in frequency1) {
    if(!(key * key in frequency2)) {
      return false;
    }
  }

  return true;
}

console.time("sameFrequency2");
console.log(sameFrequency2([1, 3, 4, 4], [1, 9, 16, 16])); // true // O(n) time complexity
console.timeEnd("sameFrequency2");
