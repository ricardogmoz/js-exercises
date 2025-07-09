function oddEven(n){
    if (n === 0){
        return n + " even";
    } else if (n % 2 === 0){
        return n + " even";
    } else {
        return n + " odd";
    }
}

console.log(oddEven(15));
console.log(oddEven(14));
