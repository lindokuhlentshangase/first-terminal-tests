describe('isWeekday', function() {
    it('should return true for Monday', function() {
      assert.isTrue(isWeekday('Monday'));
    });
  
    it('should return true for Tuesday', function() {
      assert.isTrue(isWeekday('Tuesday'));
    });
  
    it('should return true for Wednesday', function() {
      assert.isTrue(isWeekday('Wednesday'));
    });
});