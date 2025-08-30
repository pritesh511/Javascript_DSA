// 3 * 2 * 1

function factorial(num) {
    // while(num >= 1) {
    //     output = output * num;
    //     num--
    // }

    // return output;

    if(num == 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(7));