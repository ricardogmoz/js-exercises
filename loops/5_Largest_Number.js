function largestNumber(a, b, c, d, e){
    if (a > b && a > c && a > d && a > e){
        return (a);
    } else if (b > a && b > c && b > d && b > e){
        return (b);
    } else if (c > a && c > b && c > d && c > e){
        return (c);
    } else if (d > a && d > b && d > c && d > e){
        return (d);
    } else if (e > a && e > b && e > c && e > d){
        return (e);
    } 
}

console.log(largestNumber(1, 2, 3, 4, 5));
console.log(largestNumber(2, 3, 4, 5, 1));
console.log(largestNumber(3, 4, 5, 1, 2));
console.log(largestNumber(4, 5, 1, 2, 3));
console.log(largestNumber(5, 1, 2, 3, 4));