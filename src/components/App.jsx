import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const INITIAL_FEEDBACK_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbackData, setFeedbackData] = useState(INITIAL_FEEDBACK_STATE);

  const countTotalFeedback = obj => {
    let total = 0;
    for (const key in obj) {
      total = total + obj[key];
    }
    return total;
  };

  const countPositiveFeedbackPercentage = goodValue => {
    return ((goodValue / countTotalFeedback(feedbackData)) * 100).toFixed(0);
  };

  const onLeaveFeedback = e => {
    setFeedbackData(prevfeedbackData => {
      return {
        ...prevfeedbackData,
        [e.target.name]: prevfeedbackData[e.target.name] + 1,
      };
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(feedbackData) !== 0 ? (
          <Statistics
            feedbackData={feedbackData}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}

export { App };
