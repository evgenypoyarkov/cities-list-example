const dependencies = [
  require('./root.ctrl').default.name,
  require('./header').default.name
]

export default angular.module('app.root', dependencies)
  .config(function($stateProvider) {
    $stateProvider
        .state('root', {
          abstract: true,
          views: {
            mainView: {
              controller: 'RootCtrl',
              templateUrl: require('file?name=root.tpl.html!jade-html!./root.tpl.jade')
            },
            header: {
              controller: 'HeaderCtrl',
              templateUrl: require('file?name=header.tpl.html!jade-html!./header/header.tpl.jade')
            }
          }
        })
        .state('root.index', {
          url: '/'
        })
  })
