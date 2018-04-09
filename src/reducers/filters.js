import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'title',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title'
      };
    case 'SORT_BY_TEXT':
      return {
        ...state,
        sortBy: 'text'
      };
    default:
      return state;
  }
};
