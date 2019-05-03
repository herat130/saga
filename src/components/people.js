import React from 'react';
import { connect } from 'react-redux';

class People extends React.Component {
  render() {
    const { people } = this.props;
    return people.map(v => {
      return (
        <p>{v.name}</p>
      )
    })
  }
}

export default connect(state => {
  return {
    people: state.peopleReducer.people,
  }
}, null)(People);