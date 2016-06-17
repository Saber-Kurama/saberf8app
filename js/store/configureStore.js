'use strict';
import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../modules';

let createSaberStore = applyMiddleware(thunk)(createStore);

let configureStore = (onComplete) => {
  const store = autoRehydrate()(createSaberStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}
export default configureStore;
