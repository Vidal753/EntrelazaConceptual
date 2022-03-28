const initialState = {
  questions: [],
};

export const ADD_CARD = 'add_question';

export default function(state = initialState, action) {
  let questions = [...state.questions];
  switch (action.type) {
    case ADD_CARD:
      questions.push(action.payload);
      return {
        ...state,
        questions,
      };
    default:
      return state;
  }
}
