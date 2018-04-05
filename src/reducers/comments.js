const commentsReducerDefaultState = [];

const commentsReducer = (state = commentsReducerDefaultState, action) => {
  switch(action.type) {

    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ];
      
  }
}