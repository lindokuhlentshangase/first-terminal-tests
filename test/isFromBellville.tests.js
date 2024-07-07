describe('isFromBellville', function() {
    it('should return true if the name starts with CY', function() {
      assert.isTrue(isFromBellville('CY123'));
    });
  
    it('should return false if the name does not start with CY', function() {
      assert.isFalse(isFromBellville('CJ123'));
    });
  
    it('should return false for an empty string', function() {
      assert.isFalse(isFromBellville(''));
    });
  
    
  });