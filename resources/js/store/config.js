/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import logger from './logger'
import crashReporter from './crashReporter'

//const loggerMiddleware = createLogger();
const middlewares = [
  thunk,
  logger,
  crashReporter
];
//middlewares.push(loggerMiddleware);
//const storeConfig = (initialState = {}) => {
export default function (initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [
    applyMiddleware(...middlewares),
  ]
  
  if (process.env.NODE_ENV !== 'production') {
    //enhancers.push(applyMiddleware(loggerMiddleware))
    window.devToolsExtension && enhancers.push(window.devToolsExtension())
  }
  
  const store = createStore(rootReducer, initialState, compose(...enhancers))
  
  // For hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }
  return store 
}

//export default storeConfig