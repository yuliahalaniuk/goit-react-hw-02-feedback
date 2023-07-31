import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  values,
  getTotal,
  options,
  getPositivePercentage,
  neededState,
}) => (
  <>
    {getTotal(values) === 0 ? (
      <p>There is no feedback</p>
    ) : (
      <ul className={css.feedbackList}>
        {options.map(opt => (
          <li key={opt}>
            <span>
              {opt}: {neededState[opt]}
            </span>
          </li>
        ))}
        <li>Total : {getTotal(values)}</li>
        <li>Positive feedback : {getPositivePercentage(values)}%</li>
      </ul>
    )}
  </>
);

Statistics.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  getPositivePercentage: PropTypes.func.isRequired,
  getTotal: PropTypes.func.isRequired,
  neededState: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
