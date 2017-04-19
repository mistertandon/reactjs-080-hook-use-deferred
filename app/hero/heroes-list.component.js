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

    /**
     * This functon is used to update hero specific location.
     * `updateLocation` function will be invoked by 'editableField'
     * component.
     */
    myctrl.updateLocation = function (hero_obj, location_prop, location_value) {

      hero_obj[location_prop] = location_value;
    }
  }

  angular
    .module('heroes-list.component', [])
    .component('heroesList', {

      controller: heroesListController,
      templateUrl: 'hero/heroes-list.component.html'
    });
})(window.angular);