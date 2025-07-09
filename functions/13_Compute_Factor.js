function factor(num){
    if (num <= 0) {
        return false;
    }

    let factor = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factor.push(i);
        }
    }

    return factor;
}

console.log(factor(6));   
console.log(factor(28));  
console.log(factor(496)); 
console.log(factor(12));  
console.log(factor(1));   
