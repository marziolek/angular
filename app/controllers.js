var website = angular.module('website', [
	'ngRoute',
  'website.view1',
  'website.view2',
  'website.version',
  'ngAnimate',
  'ngAria',
  'ngMaterial'
  ]);

website.controller('WebsiteController', function ($scope, $http, $mdDialog) {
  $scope.phones = [
  {'name': 'Nexus S',
  'snippet': 'Fast just got faster with Nexus S.'},
  {'name': 'Motorola XOOM™ with Wi-Fi',
  'snippet': 'The Next, Next Generation tablet.'},
  {'name': 'MOTOROLA XOOM™',
  'snippet': 'The Next, Next Generation tablet.'}
  ];

  $http.get('people.json').success( function(data) {
    $scope.people = data;
  })

  $scope.openDialog = function($event) {
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'view1/template.tpl.html',
      controller: 'WebsiteController'
    })
  }

  $scope.closeDialog = function() {
    $mdDialog.hide();
  };
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);