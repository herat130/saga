export const fetchPeopleSuccess = (people) => {
  return {
    type: 'FETCH_PEOPLE_SUCCESS',
    payload: people,
  };
};

export const getAllPeople = () => {
  return {
    type: 'FETCH_PEOPLE',
  };
};

export const asyncAction = () => {
  return {
    type: 'COUNTER_INCREMENT',
  }
};

export const ciAction = ()=>{
  return {
    type: 'C_I',
  }
}

export const getRandomValues = () => {
  return {
    type: 'GET_RANDOM_VALUES',
  };
};