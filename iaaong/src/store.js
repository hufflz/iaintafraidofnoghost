import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import foundEvidenceReducer from './redux/reducers/foundEvidenceReducer';

// const initialState = {};

const middleware = [thunk];

const store = createStore(
    foundEvidenceReducer, 
    // initialState, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;