function firstNonRepeatedChar(str) {
    let counts = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        counts[char] = (counts[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (counts[str[i]] === 1) {
            return str[i];
        }
    }

    return null; 
}

console.log(firstNonRepeatedChar("abacddbec")); 
console.log(firstNonRepeatedChar("aabbcc"));    
