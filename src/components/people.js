import React from 'react';
import { connect } from 'react-redux';
import { getRandomValues, asyncAction, ciAction } from '../actions/people.action';
class People extends React.Component {

  componentDidMount() {
    this.props.getRandomValues();
  }

  clickHandler = () => {
    this.props.asyncAction();
  }
  clickHandler2=()=>{
    this.props.ciAction();
  }

  renderButton() {
    return (
      <button className="btn" onClick={this.clickHandler}>Async Button</button>
    )
  }

  renderButton2() {
    return (
      <button className="btn" onClick={this.clickHandler2}>3 time click and Stop</button>
    )
  }

  render() {
    const { people, random, counter } = this.props;
    const x = random.map(v => {
      return (
        <span>{v}</span>
      )
    });
    const y = people.map(v => {
      return (
        <p>{v.name}</p>
      )
    });
    return (
      <React.Fragment>
        {x}
        {y}
        {this.renderButton()}
        <span>{counter}</span>
        {this.renderButton2()}
      </React.Fragment>
    )
  }
}

export default connect(state => {
  return {
    people: state.peopleReducer.people,
    random: state.peopleReducer.random,
    counter: state.peopleReducer.counter,
  }
}, (dispatch) => {
  return {
    getRandomValues: () => dispatch(getRandomValues()),
    asyncAction: () => { dispatch(asyncAction()) },
    ciAction:()=>{ dispatch(ciAction())},
  }
})(People);