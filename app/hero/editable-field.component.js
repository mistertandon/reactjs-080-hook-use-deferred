(function (angular) {
  'use strict';

  function EditableFieldController() {

  }

  angular
    .module('editable-field.component', [])
    .component('editableField', {

      controller: EditableFieldController,
      templateUrl: 'hero/editable-field.component.html',
      bindings: {
        heroinfo: '='
      }

    })
})(window.angular);