'use strict';

angular.module('website.version', [
  'website.version.interpolate-filter',
  'website.version.version-directive'
])

.value('version', '0.1');
