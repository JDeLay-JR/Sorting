function bubbleSort(arr) {
  var sorted = false;
  var count = 1;
  while (!sorted) {
    var swaps = 0;
    for (var i = 0; i < arr.length - count; i++) {
      if (compare(i, i + 1, arr)) {
        swap(i, i + 1, arr);
        swaps++;
      }
    }
    if (!swaps) {
      sorted = true;
    }
    count++;
  }
  return arr;
}

function swap(num1, num2, arr) {
  let temp = arr[num2];
  arr[num2] = num1;
  arr[num1] = temp;
  return arr;
}

function compare(num1, num2, arr) {
  return arr[num1] > arr[num2];
}
