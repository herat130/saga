const initial_state = {
  loading: false,
  error: false,
  people: [],
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return Object.assign({}, state, { people: action.payload });
    default:
      return state;
  }
}