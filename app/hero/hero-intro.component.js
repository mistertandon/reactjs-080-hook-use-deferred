(function (angular) {
  'use strict';

  function HeroIntroController() {

  }

  angular.module('hero-intro.component', [

  ]).

    component('heroIntro', {

      controller: HeroIntroController,
      templateUrl: 'hero/hero-intro.component.html',
      bindings: {
        hero: '='
      }

    });
})(window.angular)

