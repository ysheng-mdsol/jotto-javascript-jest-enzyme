import React from 'react';
import PropTypes from 'prop-types';

const TotalGuesses = (props) => {
  return (
    <div>
      Total Guesses: {props.guessedWords.length}
    </div>
  );
};

TotalGuesses.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default TotalGuesses;