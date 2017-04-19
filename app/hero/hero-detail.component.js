(function (angular) {
  'use strict';

  function HeroDetailController($scope, $element, $attrs) {

    var ctrl = this;

    ctrl.updateLocation = function (location_field_name, location_field_value) {

      ctrl.onUpdate(
        {
          'hero': ctrl.heroInfo,
          'prop': location_field_name,
          'value': location_field_value
        }
      );
    }
  }

  angular
    .module('hero-detail.component', [])
    .component('heroDetail', {

      controller: HeroDetailController,
      templateUrl: 'hero/hero-detail.component.html',
      bindings: {
        heroInfo: '=',
        onUpdate: '&'
      }

    });

})(window.angular);