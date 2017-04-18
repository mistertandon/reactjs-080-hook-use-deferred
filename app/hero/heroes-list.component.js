(function (angular) {
  'use strict';

  function heroesListController($scope, $element, $attrs) {

    var myctrl = this;

    myctrl.heroeslist = [
      {
        name: 'Parvesh',
        location: 'NCR'
      },
      {
        name: 'Praveen',
        location: 'Noida'
      },
      {
        name: 'Prabhash',
        location: 'Noida sector 60'
      }
    ];

  }

  angular
    .module('heroes-list.component', [])
    .component('heroesList', {

      controller: heroesListController,
      templateUrl: 'hero/heroes-list.component.html'
    });
})(window.angular);