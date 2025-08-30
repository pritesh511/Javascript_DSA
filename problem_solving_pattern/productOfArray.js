// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// 1 * 2 * 3 * 10

// function productOfArray(arr) {
//     if(arr.length == 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1));
// }

// function recursiveRange(num) {
//     if(num == 0) return 0;
//     return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(10))


// Fibonaci seriew with nth number

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonaciNthNumber(num) {
    let output = [1];
    let i = 0;

    while(i < num) {
        const val = output[i] + output[i + 1]
    }
}

console.log(fibonaciNthNumber(5))