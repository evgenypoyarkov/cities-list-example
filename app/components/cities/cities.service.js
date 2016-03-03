const dependencies = [
  'restangular'
]

export default angular.module('app.components.cities.service', dependencies)
  .factory('CitiesService', function(Restangular) {
    class CitiesService {

      static provider = Restangular.one('/test/api.php');

      constructor() {
      }

      static list(query) {
        return CitiesService.provider.get(query)
      }
    }

    return CitiesService
  })
