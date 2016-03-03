const dependencies = [
  require('./root.ctrl').default.name,
  require('./header').default.name,
  require('./main').default.name
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
          url: '/?limit&offset&sort&sdir',
          views: {
            state: {
              controller: 'MainCtrl',
              templateUrl: require('file?name=main.tpl.html!jade-html!./main/main.tpl.jade'),
              resolve: {
                cities: function($stateParams, CitiesService) {
                  return CitiesService.list($stateParams)
                }
              }
            },
          },
          params: {
            limit: {
              value: '10',
              squash: true
            },
            offset: {
              value: '0',
              squash: true
            },
            sdir: {
              value: 'asc',
              squash: true
            },
            sort: {
              value: 'city',
              squash: true
            }
          }
        })
  })
