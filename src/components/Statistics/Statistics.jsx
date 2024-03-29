import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackName,
  ListContainer,
  ListItem,
  Quantity,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListContainer>
      <ListItem>
        <FeedbackName>Good: </FeedbackName>
        <Quantity>{good}</Quantity>
      </ListItem>
      <ListItem>
        <FeedbackName>Neutral: </FeedbackName>
        <Quantity>{neutral}</Quantity>
      </ListItem>
      <ListItem>
        <FeedbackName>Bad: </FeedbackName>
        <Quantity>{bad}</Quantity>
      </ListItem>
      <ListItem>
        <FeedbackName>Total: </FeedbackName>
        <Quantity>{total}</Quantity>
      </ListItem>
      <ListItem>
        <FeedbackName>Positive feedback: </FeedbackName>
        <Quantity>{positivePercentage}</Quantity>
      </ListItem>
    </ListContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
