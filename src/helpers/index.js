export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterArray = Array.from(new Set(secretWord.split('')));
  const guessedLetterArray = Array.from(new Set(guessedWord.split('')));
  return [...secretLetterArray].filter(letter => guessedLetterArray.includes(letter)).length;
};