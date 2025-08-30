function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            return i;
        }
    }

    return -1;
}

linearSearch([1, 4, 6, 8, 9, 35, 67], 9)