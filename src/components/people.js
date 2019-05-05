import React from 'react';
import { connect } from 'react-redux';
import { getRandomValues } from '../actions/people.action';
class People extends React.Component {

  componentDidMount() {
    this.props.getRandomValues();
  }

  render() {
    const { people, random } = this.props;
    const x = random.map(v => {
      return (
        <span>{v}</span>
      )
    });
    const y = people.map(v => {
      return (
        <p>{v.name}</p>
      )
    })
    return [x, y];
  }
}

export default connect(state => {
  return {
    people: state.peopleReducer.people,
    random: state.peopleReducer.random,
  }
}, (dispatch) => {
  return {
    getRandomValues: () =>dispatch(getRandomValues())
  }
})(People);