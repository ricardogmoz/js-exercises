function vowels(str){
    let vocales = "aeiouAEIOU";
    let vocN = 0;

    for(var x = 0; x < str.length; x++){
        if (vocales.indexOf(str[x] !== 1)){
            vocN += 1;
        }
    }
    return vocN;
}

console.log(vowels("aaaaaAA"));