'use strict';

const sum = (...args) => {
  let acc = 0;
  for (const number of args) {
    acc += number;
  }
  return acc;
};

module.exports = { sum };
