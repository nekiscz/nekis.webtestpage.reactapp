import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import  testReducer  from './reducer_test';

const rootReducer = combineReducers({
    test: testReducer,
    form: formReducer
});

export default rootReducer;