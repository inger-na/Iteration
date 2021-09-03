'use strict';

const max = (matrix) => {
  let value = matrix[0][0];
  const getMax = (prev, actual) => Math.max(prev, actual);
  for (const array of matrix) {
    const number = array.reduce(getMax, value);
    value = number;
  }
  return value;
};

module.exports = { max };
