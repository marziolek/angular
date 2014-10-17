'use strict';

describe('website.version module', function() {
  beforeEach(module('website.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
