'use strict';

const ages = (persons) => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    const age = person.died - person.born;
    data[name] = age;
  }
  return data;
};

module.exports = { ages };
