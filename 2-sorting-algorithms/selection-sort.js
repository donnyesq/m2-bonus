function selectionSort(arr) {
  const length = arr.length;
  let newArr = [];

  while (newArr.length < length) {
    let min = Math.min(...arr);
    let minIndex = arr.indexOf(min);

    newArr.push(min);
    arr.splice(minIndex, 1);
  }
  return newArr;
}

// Tests
// (Add some others!)
compareArrays(selectionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);

compareArrays(selectionSort([7, 4, 8, 3, 1, 6, 5, 2, 9, 10]), [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
]);

// Test code
function compareArrays(arr1, arr2) {
  let value = arr2.join(",");
  let result = arr1.join(",");

  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
