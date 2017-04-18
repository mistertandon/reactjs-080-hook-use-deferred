(function (angular) {
  'use strict';

  function HeroDetailController($scope, $element, $attrs) {

    var ctrl = this;

  }

  angular
    .module('hero-detail.component', [])
    .component('heroDetail', {

      controller: HeroDetailController,
      templateUrl: 'hero/hero-detail.component.html',
      bindings: {
        heroinfo: '='
      }
    })

})(window.angular);