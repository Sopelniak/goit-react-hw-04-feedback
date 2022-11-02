import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={s.good}
        name="good"
        onClick={onLeaveFeedback}
        type="button"
      >
        Good
      </button>
      <button
        className={s.neutral}
        name="neutral"
        onClick={onLeaveFeedback}
        type="button"
      >
        Neutral
      </button>
      <button
        className={s.bad}
        name="bad"
        onClick={onLeaveFeedback}
        type="button"
      >
        Bad
      </button>
    </>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
