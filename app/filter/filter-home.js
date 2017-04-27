(function (angular) {
  'use strict';

  var FilterHomeControllerFn = function ($filter) {

    var self = this;

    self.title = "AngularJS Filter";

    /**
     * `candidatesList` contains candidates list.
     */
    self.candidatesList = self.candidatesListRef = [
      { personId: 10, firstName: "John", lastName: "Smith", Sex: "Male" },
      { personId: 11, firstName: "James", lastName: "Last", Sex: "Male" },
      { personId: 12, firstName: "Mary", lastName: "Heart", Sex: "Female" },
      { personId: 13, firstName: "Sandra", lastName: "Goldsmith", Sex: "Female" },
      { personId: 14, firstName: "Shaun", lastName: "Sheep", Sex: "Male" },
      { personId: 15, firstName: "Nicola", lastName: "Smith", Sex: "Male" }
    ];

    /**
     * This function is used to apply filter on candidatesList on the basis of 'Sex'
     */
    self.filterCandidateByGender = function (sex) {

      self.candidatesList = $filter('CandidateFilteriationByGender')(self.candidatesListRef, sex);
    }

    /**
     * This function is used to reset `CandidateFilteriationByGender` filter.
     */
    self.filterCandidateReset = function () {

      self.candidatesList = self.candidatesListRef;
    }
  }

  /**
   * This function contains definition for `CandidateFilteriationByGender` filter.
   */
  var CandidateFilteriationByGenderFn = function () {

    return function (candidateList, sex) {

      return _.filter(candidateList, function (o) {

        return o.Sex == sex;
      });
    }
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

    .controller('FilterHomeController', ["$filter", FilterHomeControllerFn])

    .filter('CandidateFilteriationByGender', CandidateFilteriationByGenderFn);

})(window.angular);