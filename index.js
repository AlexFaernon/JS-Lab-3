function bubbleSort(array, reversed) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (typeof array[j] != 'number') {
                throw new TypeError("Array should contain only numbers")
            }
            if (reversed && array[j] < array[j + 1] ||
                !reversed && array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

function binarySearch(array, item, start = 0, end = array.length - 1) {
    if (start > end) {
        return -1
    }

    const middle = Math.floor((start + end) / 2)

    if (typeof array[middle] != "number") {
        throw new TypeError("Array should contain only numbers")
    }
    if (array[middle] === item) {
        return middle
    }
    if (array[middle] < item) {
        return binarySearch(array, item, middle + 1, end)
    } else {
        return binarySearch(array, item, start, middle - 1)
    }
}

function bracketCheck(str) {
    const bracketsStack = []
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const c of str) {
        if (['(', '{', '['].includes(c)){
            bracketsStack.push(c)
            continue
        }
        if ([')', '}', ']'].includes(c) && bracketsStack.pop() !== pairs[c]){
            return false
        }
    }
    return true
}

let array = [3, 2, 1, 5];
bubbleSort(array, false)
console.log(array)

array = [1, 2, 4, 8]
console.log(binarySearch(array, 3))

const niceStr = "({aa}aa)[]"
const badStr = "()aa{]}["
console.log(bracketCheck(niceStr))
console.log(bracketCheck(badStr))