describe('regCheck', function() {
    it('should return true if the names end with the given string', function() {
      assert.isTrue(regCheck('ABC123GP', 'GP'));
    });
  
    it('should return false if the names do not end with the given string', function() {
      assert.isFalse(regCheck('ABC123GP', 'CY'));
    });
  
    it('should return true if the names end with an empty string', function() {
      assert.isTrue(regCheck('ABC123GP', ''));
    });

});