// Write a function which take sorted array of integer and find the pair of number whihc sum is zero if not then return undefined.

// [-4, -3, -2, 0, 1, 2] => [-2, 2]
// [-4, -3, -2, 0, 1, 6] => undefined

// Time complexity of the - o(n^2)
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Time complexity of the - o(n)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero1([-4, -3, -2, 0, 1, 2, 6]));
console.log(sumZero2([-4, -3, -2, 0, 1, 2, 6]));
