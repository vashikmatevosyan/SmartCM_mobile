import {persistStore, persistReducer} from 'redux-persist';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogicMiddleware} from 'redux-logic';
import {userDataLogic} from '../logic/user';
const logic = [userDataLogic];
const logicMiddleware = createLogicMiddleware(logic);
const middleware = applyMiddleware(logicMiddleware);
const enhancer = middleware;
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);

export {store, persistor};