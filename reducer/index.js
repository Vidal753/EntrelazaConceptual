import { combineReducers } from 'redux';
import choice from './choice';
import question from './question';
const appReducer = combineReducers({
  choice,
  question,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
