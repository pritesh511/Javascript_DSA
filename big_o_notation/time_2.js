function addToN(n) {
    return n * (n + 1) / 2;
}

console.time('addToN');
console.log(addToN(6)); // 21
console.timeEnd('addToN');

// Taking time - 0.092041015625 ms