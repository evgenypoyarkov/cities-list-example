const dependencies = [
]

export default angular.module('app.run', dependencies)
  .run([ '$state', '$rootScope', '$location', 'Restangular', function($state, $rootScope, $location, Restangular) {
    Restangular.setErrorInterceptor((response, defer, responseHandler) => {
      if (response.status === 403) {
        $state.go('root.error', {
          code: response.status
        })
      }

      return true
    })
  }])
