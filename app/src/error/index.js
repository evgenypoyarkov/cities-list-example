import './error.styl'

const dependencies = [
  require('./error.ctrl').default.name
]

export default angular.module('app.error', dependencies)
  .config(function($stateProvider) {
    $stateProvider
        .state('root.error', {
          url: '/error/:code',
          views: {
            'mainView@': {
              controller: 'ErrorCtrl',
              templateUrl: require('file?name=error.tpl.html!jade-html!./error.tpl.jade')
            }
          }
        })
  })
