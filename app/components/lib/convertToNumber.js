export default angular.module('app.components.lib.convertToNumber', [])
.directive('convertToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push((val) => parseInt(val, 10))
      ngModel.$formatters.push((val) => parseInt(val, 10))
    }
  }
})
