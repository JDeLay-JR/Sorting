function split(wholeArray) {
  let middle = (wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, Math.floor(middle));
  let secondHalf = wholeArray.slice(Math.ceil(middle));
    return [firstHalf, secondHalf];
}

function merge (arr1, arr2) {
  if (arr1[0] > arr2[0]) {
    return arr2.concat(arr1);
  } else {
    return arr1.concat(arr2);
  }
}

function mergeSplit (wholeArray) {

}
