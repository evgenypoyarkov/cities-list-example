export default angular.module('app.config', [])
  .config(function($urlRouterProvider, $locationProvider, RestangularProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
    $locationProvider.hashPrefix('!')
    $urlRouterProvider.otherwise('/error/404')

    RestangularProvider.setBaseUrl('http://52.29.128.199')
  })
