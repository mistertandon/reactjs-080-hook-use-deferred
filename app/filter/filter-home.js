(function (angular) {
  'use strict';

  var FilterHomeControllerFn = function () {

    var self = this;

    self.title = "AngularJS Filter";
  }

  angular

    .module('filterApp.home', [

    ])

    .config(["$stateProvider", function ($stateProvider) {

      $stateProvider
        .state('controllerAppHome', {

          url: '/',
          templateUrl: 'filter/filter-home.html',
          controller: 'FilterHomeController'

        });

    }])

    .controller('FilterHomeController', [FilterHomeControllerFn]);

})(window.angular);