import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

//para que funcione el reduxdevtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
//combina los reducers
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

 export const store = createStore(reducers, enhancer);




















