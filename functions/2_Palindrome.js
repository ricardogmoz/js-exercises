function palindrome(str) {
    str = str.replace(/\s+/g, "").toLowerCase();
    return str === str.split("").reverse().join("");
}

console.log(palindrome("ava"))
console.log(palindrome("java"))
