export const fetchPeopleSuccess = (people) => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    payload: people,
  };
};

export const getAllPeople = () => {
  return {
    type: 'FETCH_PEOPLE',
  }
}