function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }

    return -1; // No encontrado
}

let sortedArray = [1, 3, 5, 7, 9, 11];

console.log(binarySearch(sortedArray, 5)); 
console.log(binarySearch(sortedArray, 9)); 
console.log(binarySearch(sortedArray, 2));