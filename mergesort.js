function split(wholeArray) {
  let middle = (wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, Math.ceil(middle));
  let secondHalf = wholeArray.slice(Math.ceil(middle));
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let newArr = [];
  for (var i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[p1] < arr2[p2] || !arr2[p2]) {
      newArr.push(arr1[p1]);
      p1++;
    } else {
      newArr.push(arr2[p2]);
      p2++;
    }
  }
  return newArr;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var [arr1, arr2] = split(array);
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  return merge(arr1, arr2);
}
