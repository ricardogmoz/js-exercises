function negative(n1){
    if (n1 < 0){
        throw new Error("Error: The number is Zero");
    }
    else {
        return n1;
    }
}

try{
console.log(negative(8));
console.log(negative(0));
console.log(negative(-5));
} catch(error){
    console.log(error.message);
}