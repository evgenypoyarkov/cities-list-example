export default angular.module('app.error.ctrl', [])
  .controller('ErrorCtrl', function($scope, $stateParams) {
    $scope.error = {
      code: $stateParams.code
    }
  })
