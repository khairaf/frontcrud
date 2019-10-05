const initialState = { 
  list: [],
  id: '',
  name: '',
  age: '',
  salary: '',
};

export function list(state = initialState, action) {
  switch (action.type) {
      case 'FETCHED_ALL_LIST':
          return {
              ...state,
              list: action.list
          };
      default:
          return state
   }
}