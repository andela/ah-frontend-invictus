import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk, logger];

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    )
  );
  const persistor = persistStore(store);
  return { persistor, store };
};


export default configureStore;
