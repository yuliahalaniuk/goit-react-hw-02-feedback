import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ total, positivePercentage, good, bad, neutral }) => (
  <>
    <ul className={css.feedbackList}>
      {/* {options.map(opt => (
        <li key={opt}>
          <span>
            {opt}: {neededState[opt]}
          </span>
        </li>
      ))} */}
      <li key={'id-1'}>Good: {good}</li>
      <li key={'id-2'}>Neutral: {neutral}</li>
      <li key={'id-3'}>Bad: {bad}</li>
      <li key={'id-4'}>Total : {total}</li>
      <li key={'id-5'}>Positive feedback : {positivePercentage}%</li>
    </ul>
  </>
);

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};

export default Statistics;
