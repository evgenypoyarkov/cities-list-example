import './city.styl'

const dependencies = [
  require('./city.directive').default.name
]

export default angular.module('app.components.cities.city', dependencies)
