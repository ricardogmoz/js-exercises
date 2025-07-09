function emptyStr(str){
    if (str.length === 0){
        throw new Error("Error: The string is empty");
    }
    else {
        return str;
    }
}

try{
console.log(emptyStr("Empty"));
console.log(emptyStr(("")));
} catch(error){
    console.log(error.message);
}