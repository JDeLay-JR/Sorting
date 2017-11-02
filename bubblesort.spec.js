describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single element', function() {
    expect(bubbleSort([1])).toEqual([1]);
  })
  it('handles a totally unsorted array', function() {
    expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
    expect(window.swap.calls.count()).toEqual(3);
    expect(window.compare.calls.count()).toEqual(3);
  })
  it('handles a semi-sorted array', function() {
    expect(bubbleSort([5,3,4,1])).toEqual([1,3,4,5]);
    expect(window.swap.calls.count()).toEqual(5);
    expect(window.compare.calls.count()).toEqual(6);
  })
  it('handles repeated numbers', function() {
    expect(bubbleSort([5,5,4,3,2,1])).toEqual([1,2,3,4,5,5]);
    expect(window.swap.calls.count()).toEqual(14);
  })
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });
});
