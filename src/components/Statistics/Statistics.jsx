import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    return (
      <>
        <ul className={s.list}>
          <li className={s.item}>
            Good: <span>{good}</span>
          </li>
          <li className={s.item}>
            Neutral: <span>{neutral}</span>
          </li>
          <li className={s.item}>
            Bad: <span>{bad}</span>
          </li>
          <li className={s.total}>
            Total: <span>{countTotalFeedback({ good, neutral, bad })}</span>
          </li>
          <li className={s.positive}>
            Positive feedback:{' '}
            <span>
              {countPositiveFeedbackPercentage(good, countTotalFeedback)}%
            </span>
          </li>
        </ul>
      </>
    );
  }
}

export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
