import { applyMiddleware, createStore, combineReducers } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import todos from './todos';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';

const middleware = [ thunk ];
const pr = persistReducer({key: 'root', storage}, combineReducers({
    todos
}));
const store = createStore(
    pr,
    applyMiddleware(...middleware),
);

export default store;