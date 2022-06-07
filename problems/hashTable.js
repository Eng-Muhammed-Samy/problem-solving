function firstRecurringChars1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined
}
/******************************************* */
function firstRecurringChars2(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i]
        } else {
            set.add(arr[i])
        }
    }
    return undefined;
}

const t1 = performance.now();
console.log(firstRecurringChars1([1, 2, 3, 4, 5, 6, 7, 1, 2, 5, 4, 8]))
console.log("time without Set = ", performance.now() - t1)
const t2 = performance.now();
console.log(firstRecurringChars2([1, 2, 3, 4, 5, 6, 7, 1, 2, 5, 4, 8]))
console.log("time with Set = ", performance.now() - t2)