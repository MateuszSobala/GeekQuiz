// Directives
angular.module('app.directives', [])
  .directive('myDirective', [function () {
    return {
      restrict: 'A',
      template: '<div>my directive!</div>'
    }
  }]);