import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onReviewClick = e => {
    this.setState({
      [e.currentTarget.id]: this.state[e.currentTarget.id] + 1,
    });
  };

  getTotal = values =>
    values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  getPositivePercentage = values =>
    Number(((this.state.good / this.getTotal(values)) * 100).toFixed(0));

  render() {
    const { state, getTotal, onReviewClick, getPositivePercentage } = this;

    const options = Object.keys(state);
    const values = Object.values(state);

    const total = getTotal(values);
    const positivePercentage = getPositivePercentage(values);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onReviewClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
