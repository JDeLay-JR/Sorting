describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single element', function() {
    expect(bubbleSort([1])).toEqual([1]);
  })
  it('handles a totally unsorted array', function() {
    expect(bubbleSort([9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9]);
  })
  it('handles a semi-sorted array', function() {
    expect(bubbleSort([5,4,3,1,2,8,7,9,6])).toEqual([1,2,3,4,5,6,7,8,9]);
  })
  it('handles repeated numbers', function() {
    expect(bubbleSort([5,5,4,3,2,1])).toEqual([1,2,3,4,5,5]);
  })
});
