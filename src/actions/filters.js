// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const searchInTitle = () => ({
  type: 'SORT_BY_TITLE'
});

// SORT_BY_AMOUNT
export const searchInText = () => ({
  type: 'SORT_BY_TEXT'
});
