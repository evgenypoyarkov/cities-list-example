/* eslint no-console: 0 */
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webPackConfig from './webpack.config.js'
import proxy from 'express-http-proxy'
import config from './config.json'

if (!process.env.NODE_ENV)
  process.env.NODE_ENV = 'development'

const isDeveloping = process.env.NODE_ENV === 'development'
const port = isDeveloping ? 3000 : (process.env.PORT || 3000)
const app = express()

const proxyConfig = {
  forwardPath: req => {
    console.log('Proxy', req.method, req.url)
    return '/api' + require('url').parse(req.url).path
  },
  decorateRequest: req => {
    req.rejectUnauthorized = false
  }
}

const socketProxyConfig = {
  forwardPath: req => {
    return '/socket.io' + require('url').parse(req.url).path
  },
  decorateRequest: req => {
    req.rejectUnauthorized = false
    console.log(req)
  }
}

const apiHost = config.api.host + ':' + config.api.port
const apiProxy = proxy(apiHost, proxyConfig)

app.use('/api', apiProxy)
app.use('/socket.io', proxy(apiHost, socketProxyConfig))
console.info('api host: ', apiHost)

if (isDeveloping) {
  const compiler = webpack(webPackConfig)
  const middleware = webpackMiddleware(compiler, {
    publicPath: webPackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  app.use(express.static(__dirname + '/dist'))

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/dist/index.html')))
    res.end()
  })
} else {
  app.use(express.static(__dirname + '/dist'))

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
  })
}

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
})
