import './main.styl'
import * as ld from 'lodash'
import pagination from 'angular-ui-bootstrap/src/pagination'

const dependencies = [
  pagination
]

export default angular.module('app.root.main.ctrl', dependencies)
  .controller('MainCtrl', function MainCtrl($scope, $state, $stateParams, cities) {
    $scope.options = {
      pagination: {
        maxSize: 10,
        rotate: true
      },
      limits: ld.range(10, 100, 20),
      sorting: {
        directions: [ 'asc', 'desc' ],
        fields: [ 'city', 'state', 'population' ]
      }
    }

    $scope.changePage = function() {
      $scope.pagination.offset = ($scope.pagination.page - 1) * $scope.pagination.limit
      $state.go('.', ld.assign($scope.params, $scope.pagination, $scope.sorting))
    }

    const init = function() {
      $scope.params = ld.clone($stateParams)
      $scope.cities = cities.rows

      $scope.pagination = ld.defaults($scope.params, { total: cities.total })
      $scope.pagination.page = $scope.pagination.offset / $scope.pagination.limit + 1

      $scope.sorting = {
        sort: $scope.params.sort,
        sdir: $scope.params.sdir
      }
    }

    init()
  })
