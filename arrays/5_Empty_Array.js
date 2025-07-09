function emptyArray(array){
    if (array.length === 0){
        throw new Error("Error: The array is empty");
    }
    else {
        return array;
    }
}

try{
console.log(emptyArray([0, 1, 2, 3]));
console.log(emptyArray([0]));
console.log(emptyArray([1, 1, 1]));
console.log(emptyArray([]));;
} catch(error){
    console.log(error.message);
}