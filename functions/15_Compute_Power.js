function exp(n1, n2){
    let count = 1;

    for(let i = 1; i <= n2; i++){
        count = n1 * count
    }
    return count;
}

console.log(exp(2, 3));