(function (angular) {
  'use strict';

  function HeroIntroController() {


  }

  // Declare app level module which depends on views, and components
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

