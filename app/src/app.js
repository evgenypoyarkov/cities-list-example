import '../assets/app.styl'
import vendor from './vendor'

const dependencies = [
  // states
  require('./error').default.name,
  require('./root').default.name,

  // initialization
  require('./config').default.name,
  require('./run').default.name
]

angular.module('app', vendor.concat(dependencies))
