import '../assets/app.styl'
import vendor from './vendor'

const dependencies = [
  //components
  require('../components/lib').default.name,
  require('../components/cities').default.name,

  // states
  require('./error').default.name,
  require('./root').default.name,

  // initialization
  require('./config').default.name,
  require('./run').default.name
]

angular.module('app', vendor.concat(dependencies))
