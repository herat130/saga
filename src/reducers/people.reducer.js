const initial_state = {
  loading: false,
  error: false,
  people: [],
  random: [],
  counter: 0,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return Object.assign({}, state, { people: action.payload });
    case 'GET_RANDOM_VALUES':
      return Object.assign({}, state, { random: [1, 2, 3, 4, 5] });
    case 'ASYNC_COUNTER_INCREMENT':
      return Object.assign({}, state, { counter: state.counter+1 });
    default:
      return state;
  }
}