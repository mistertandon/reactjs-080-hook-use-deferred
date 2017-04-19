(function (angular) {
  'use strict';

  function EditableFieldController() {

    var ctrl = this;

    /**
     * When Component will get initiated, $onInit function will called.
     */
    ctrl.$onInit = function () {

      ctrl.isEditMode = false;
      ctrl.locationValueCopy = ctrl.locationValue;
    }

    /**
     * This function will handle <edit OR save> output event
     * functionality.
     */
    ctrl.handleModeChange = function () {

      if (ctrl.isEditMode) {

        ctrl.onUpdate({ value: ctrl.locationValue });
        ctrl.locationValueCopy = ctrl.locationValue;
      }

      ctrl.isEditMode = !ctrl.isEditMode;
    }

    /**
     * This function is used to reset location in middle of
     * `location editing`
     */
    ctrl.resetLocation = fuction() {
       
    }

  }

  angular
    .module('editable-field.component', [])
    .component('editableField', {

      controller: EditableFieldController,
      templateUrl: 'hero/editable-field.component.html',
      bindings: {
        locationValue: '=',
        fieldType: '@',
        onUpdate: '&'
      }

    });

})(window.angular);