import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getTotal = values =>
    values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  onReviewClick = e => {
    this.setState({
      [e.currentTarget.id]: this.state[e.currentTarget.id] + 1,
    });
  };

  getPositivePercentage = values =>
    ((this.state.good / this.getTotal(values)) * 100).toFixed(0);

  render() {
    const { state, getTotal, onReviewClick, getPositivePercentage } = this;

    const options = Object.keys(state);
    const values = Object.values(state);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onReviewClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            neededState={state}
            getTotal={getTotal}
            values={values}
            options={options}
            getPositivePercentage={getPositivePercentage}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
