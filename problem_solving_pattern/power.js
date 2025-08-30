function power(base, expo) {
    if(expo == 0) return 1;
    return base * power(base, expo - 1)
    
    // while(expo >= 1) {
    //     output = output * base;
    //     expo--; 
    // }
    // return output;
}

// 2 * 2 * 2

console.log(power(2, 0))