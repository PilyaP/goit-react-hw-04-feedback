import React, { useState, useEffect } from 'react';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import { Container } from './App.styled';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const totalFeedback = Object.values(feedback).reduce(
      (total, value) => total + value,
      0
    );
    document.title = `Feedback App (${totalFeedback} feedbacks)`;
  }, [feedback]);

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = Object.values(feedback).reduce(
      (total, value) => total + value,
      0
    );
    if (totalFeedback) {
      return Math.round((good * 100) / totalFeedback).toFixed() + '%';
    } else {
      return '0%';
    }
  };

  const totalFeedback = Object.values(feedback).reduce(
    (total, value) => total + value,
    0
  );
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedback);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
export default App;
