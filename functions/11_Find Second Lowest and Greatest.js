function lowGreat(array) {
    let sorted = array.slice().sort(function(a, b) {
        return a - b;
    });

    let unique = [...new Set(sorted)];

    if (unique.length < 2) {
        return "Array does not have enough unique numbers";
    }

    let secondLowest = unique[1];
    let secondGreatest = unique[unique.length - 2];

    return [secondLowest, secondGreatest];
}

console.log(lowGreat([1, 2, 3, 4, 5]));       
console.log(lowGreat([5, 5, 5, 7, 7, 8]));    
console.log(lowGreat([1, 2]));                