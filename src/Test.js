function countOccurrences(arr) {
    let occurrences = {};
    arr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    return occurrences;
}


let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let result = countOccurrences(array);
console.log(result);

