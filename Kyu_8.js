// Sum of differences in array
// [2, 1, 10]  -->  9

//In descending order: [10, 2, 1]
//Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

const arrey = [10, 2, 1]

function sumOfDifferences(arr) {
    console.log('работает')
    for(i in arr) {
        let result = arr[0]-arr[1]
    }
    return result
}

console.log(sumOfDifferences(arrey))