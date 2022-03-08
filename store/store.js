import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import tapsReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const rootReducer = combineReducers({
    taps: tapsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
export let persistor = persistStore(store)

export default store;