import { createStore, combineReducers } from 'redux';
import handwashReducer from '../reducers/handwashReducer';

const rootReducer = combineReducers({
    foods: handwashReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;