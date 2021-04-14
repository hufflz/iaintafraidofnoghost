import primaryEvidenceReducer from './primaryEvidenceReducer'
import {combineReducers} from 'redux' 

const allReducers = combineReducers({
    primaryEvidence : primaryEvidenceReducer
});

export default allReducers;
