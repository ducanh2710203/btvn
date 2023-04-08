function findMaxNumber(array) {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}
let arr1 = [1,2,4,6,12,4,2,3,6,1]
let arr2 = [1,2,5,12,66,8,3,2,5]
let arr3 = [5,3,6,7,3,3,6,8,3,1]
let arr4 = [1,4,6,2,6,78,2]
 let sum = 0
console.log(findMaxNumber(arr1))
console.log(findMaxNumber(arr2))
console.log(findMaxNumber(arr3))
console.log(findMaxNumber(arr4))
sum = findMaxNumber(arr1)+findMaxNumber(arr2)+findMaxNumber(arr3)+findMaxNumber(arr4)
console.log( "sum = "+sum)