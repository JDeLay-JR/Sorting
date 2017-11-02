describe('Merge Sort', function () {
  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });
  it('handles a single element', function () {
    expect(mergeSort([1])).toEqual([1]);
  });
  it('handles a totally unsorted array', function () {
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
  it('handles a semi-sorted array', function () {
    expect(mergeSort([2, 5, 3, 4, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it('handles repeated numbers', function () {
    expect(mergeSort([5, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 5]);
  });
  it('handles odd number of numbers', function () {
    expect(mergeSort([5, 2, 3])).toEqual([2, 3, 5]);
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 4, 6])).toEqual([[1, 2], [4, 6]]);
  });
  it('is able to split an odd array into two halves', function() {
    expect(split([1, 4, 6])).toEqual([[1, 4], [6]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('is able to merge one sorted array and one unsorted array into one sorted array', function(){
    expect(merge([1, 2], [4, 3])).toEqual([1, 2, 3, 4]);
  });
  it('is able to merge one unsorted array and one sorted array into one sorted array', function(){
    expect(merge([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('is able to merge two unsorted arrays into one sorted array', function(){
    expect(merge([2, 1], [4, 3])).toEqual([1, 2, 3, 4]);
  });
});
