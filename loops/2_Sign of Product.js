function product(n1, n2, n3){
    var product = n1 * n2 * n3;

    if (product < 0){
        return "-";
    } else {
        return "+";
    }

}

console.log(product(3, 5, -7));
console.log(product(2, 4, 6));