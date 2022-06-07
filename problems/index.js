function containsCommon(arr1, arr2) {
  // convert arr1 to object
  let map = {}
  arr1.forEach(ele => {
    if (!map[ele]) {
      map[ele] = true;
    }
  });

  // compare arr with map object

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true
    }
  }
  return false
}

// readable soluation 
const containsCommon2 = (arr1, arr2) => arr1.some(ele => arr2.includes(ele));

// console.log(containsCommon2(['a', 'b', 'c'], ['x', 'y', 'a']))

function reverseString(srt) {
  // check
  if (!srt || srt.length < 2 || typeof srt != "string") {
    return "that is not string"
  }
  return srt.split("").reverse().join("")
}

const reverse2 = (str) => (!str || str.length < 2 || typeof str != "string") || [...str].reverse().join("")
console.log(reverse2(52))