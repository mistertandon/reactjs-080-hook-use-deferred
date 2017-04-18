angular
  .module('myApp.home',
  [
    'ui.router'
  ])
  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('homePage', {
        url: '/',
        templateUrl: 'hero/home.html',
        controller: 'HomeCtrl'
      }
      );

  }])
  .controller('HomeCtrl', [
    '$scope',
    function ($scope) {

      var myctrl = this;

      myctrl.hero = {
        name: 'parvesh'
      };

      $scope.welcomeMessage = "Component demonstration using Hero Tour";
    }
  ]);

