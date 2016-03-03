const dependencies = [
  require('./cities.service').default.name,
  require('./city').default.name
]

export default angular.module('app.components.cities', dependencies)
