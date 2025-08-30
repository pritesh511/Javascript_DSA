function addToN(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.time('addToN');
console.log(addToN(6)); // 21
console.timeEnd('addToN');

// Taking time - 0.133056640625 ms
