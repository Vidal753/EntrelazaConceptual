const initialState = {
  choice: [],
};
export const ADD_CHOICE = 'add-choice';

export default function(state = initialState, action) {
  let choice = [...state.choice];
  switch (action.type) {
    case ADD_CHOICE:
      choice.push(action.payload);
      return {
        ...state,
        choice,
      };

    default:
      return state;
  }
}
