import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(preloadedState) {
  /*const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);*/
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );
  // const store = createStore(rootReducer, preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);
  return store;
}