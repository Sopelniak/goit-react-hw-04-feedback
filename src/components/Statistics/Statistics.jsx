import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  feedbackData,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          Good: <span>{feedbackData.good}</span>
        </li>
        <li className={s.item}>
          Neutral: <span>{feedbackData.neutral}</span>
        </li>
        <li className={s.item}>
          Bad: <span>{feedbackData.bad}</span>
        </li>
        <li className={s.total}>
          Total: <span>{countTotalFeedback(feedbackData)}</span>
        </li>
        <li className={s.positive}>
          Positive feedback:{' '}
          <span>{countPositiveFeedbackPercentage(feedbackData.good)}%</span>
        </li>
      </ul>
    </>
  );
}

export { Statistics };

Statistics.propTypes = {
  feedbackData: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
