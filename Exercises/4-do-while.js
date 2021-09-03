'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let res = 0;
  const arr = args;
  do {
    res += arr.pop();
  } while (arr.length > 0);
  return res;
};

module.exports = { sum };
