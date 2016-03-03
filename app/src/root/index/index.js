import './index.styl'

const dependencies = []

export default angular.module('app.root.index.ctrl', dependencies)
  .controller('IndexCtrl', function IndexCtrl($scope, $state, cities) {
    $scope.cities = cities
  })
