function getFixedLengthSubsets(arr, subsetLength) {
    let result = [];

    function backtrack(start, combo) {
        if (combo.length === subsetLength) {
            result.push([...combo]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            combo.push(arr[i]);
            backtrack(i + 1, combo);  
            combo.pop();              
        }
    }

    backtrack(0, []);
    return result;
}

console.log(getFixedLengthSubsets([1, 2, 3], 2));
