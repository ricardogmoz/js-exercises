function divede(n1, n2){
    if (n2 === 0){
        throw new Error("Error: You can't divide Zero");
    }
    else {
        return n1 / n2;
    }
}

try{
console.log(divede(8, 5));
console.log(divede(8, 0));
console.log(divede(0, 5));
} catch(error){
    console.log(error.message);
}