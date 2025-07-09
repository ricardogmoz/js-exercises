function countLetter(country){
    var countLetter = country.split();
    let longest = "";

    for (let i = 0; i < countLetter.length; i++){
        if(countLetter[i].length > longest.length){
            longest = countLetter[i];
        }
    }
    return longest;
}

console.log(countLetter("Los Angeles", "Mexico", "Argentina"));