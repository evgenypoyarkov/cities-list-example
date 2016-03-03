import './city.styl'

const dependencies = []

export default angular
  .module('app.components.cities.city.directive', dependencies)
  .directive('city', function() {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        city: '=item'
      },
      templateUrl: require('file?name=city.tpl.html!jade-html!./city.tpl.jade'),
      link: function(scope, attr, elem) {
      }
    }
  })
